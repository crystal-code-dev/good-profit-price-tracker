import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class ScraperService {
  async scrapeProductsFromGoogle(item: string): Promise<void> {
    const browser = await puppeteer.launch({
      headless: false,
    });

    try {
      const page = await browser.newPage();
      await page.goto(`https://google.com/search?q=${item}&tbm=shop`);

      const data = await page.evaluate(async () => {
        const scrapedData = [];

        const cleanText = (text: string): string => {
          // Remove qualquer conteúdo relacionado a CSS e pseudo-elementos
          return text
            .replace(/(?:\s*{[^}]*}|;\s*)+/g, ' ') // Remove blocos de CSS e ponto e vírgula
            .replace(/::[^}]*\s*/g, '') // Remove pseudo-elementos (::after, ::before, etc.)
            .replace(/\s{2,}/g, ' ') // Remove múltiplos espaços
            .trim(); // Remove espaços em branco no início e no final
        };

        const products = Array.from(document.querySelectorAll('.i0X6df'));

        products.forEach((product) => {
          const name =
            cleanText(product.querySelector('.tAxDx')?.textContent) || '';
          const rate =
            cleanText(product.querySelector('.QIrs8')?.textContent) || '';
          const price =
            cleanText(product.querySelector('.a8Pemb')?.textContent) || '';
          const company =
            cleanText(product.querySelector('.IuHnof')?.textContent) || '';
          const deliverCost =
            cleanText(product.querySelector('.vEjMR')?.textContent) || '';

          scrapedData.push({
            name,
            price,
            rate,
            company,
            deliverCost,
          });
        });

        return scrapedData;
      });

      console.log('Scraped data:', data);
    } catch (error) {
      console.error('Error scraping products:', error);
    } finally {
      await browser.close();
    }
  }
}
