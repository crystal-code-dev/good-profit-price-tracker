import { Injectable } from '@nestjs/common';
import { PriceHistorySource, Product } from '@prisma/client';
import puppeteer from 'puppeteer';
import { EQSProductPrice } from 'src/enums/EQSProductPrice';
import { EQSSearchInput } from 'src/enums/EQSSearchInput';

@Injectable()
export class ScraperService {
  async scrapePrices(product: Product, priceHistorySource: PriceHistorySource) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Setting an User-Agent to simulate a normal browser
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    );

    console.info(`Scraping ${priceHistorySource.url}`);

    try {
      await page.goto(priceHistorySource.url, { timeout: 60000 });

      const priceScraped = await page.evaluate(
        async (
          priceSelector: string,
          searchInputSelector: string,
          identifier: string
        ) => {
          await new Promise<void>((resolve) => {
            const interval = setInterval(() => {
              const input = document.querySelector(searchInputSelector);

              if (input) {
                clearInterval(interval);
                resolve();
              }
            }, 100);
          });

          const inputElement = document.querySelector(
            searchInputSelector
          ) as HTMLInputElement;

          inputElement.value = identifier;
          inputElement.dispatchEvent(new Event('input', { bubbles: true }));
          inputElement.dispatchEvent(
            new KeyboardEvent('keydown', { key: 'Enter' })
          );

          await new Promise<void>((resolve) => {
            const interval = setInterval(() => {
              const priceElement = document.querySelector(priceSelector);
              if (priceElement) {
                clearInterval(interval);
                resolve();
              }
            }, 100);
          });

          const priceElement = document.querySelector(priceSelector);
          const price = priceElement?.textContent?.trim() ?? '';

          return { price };
        },
        EQSProductPrice[priceHistorySource.identifier],
        EQSSearchInput[priceHistorySource.identifier],
        product.identifier
      );

      if (!priceScraped.price) {
        console.error('Price not found');
        return;
      }

      return {
        price: parseFloat(
          priceScraped.price.replace(/[^0-9.,]/g, '').replace(',', '.')
        ),
        idProductFk: product.idProductPk,
        idPriceHistorySourceFk: priceHistorySource.idPriceHistorySourcePk,
      };
    } catch (error) {
      console.error('Failed to scrape price:', error);
    } finally {
      await browser.close();
    }
  }
}
