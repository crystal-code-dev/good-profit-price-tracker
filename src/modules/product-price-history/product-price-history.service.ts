import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { ScraperService } from '../scraper/scraper.service';

@Injectable()
export class ProductPriceHistoryService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly scraperService: ScraperService
  ) {}

  async fetchPriceHistoryDailyCache(): Promise<void> {
    console.info('Job started: fetchPriceHistoryDailyCache');

    const priceHistorySources = await this.prisma.priceHistorySource.findMany();
    const product = await this.prisma.product.findFirst();

    // TODO: Improve this logic
    for (const priceHistorySource of priceHistorySources) {
      const data = await this.scraperService.scrapePrices(
        product,
        priceHistorySource
      );

      await this.prisma.productPriceHistory.createMany({
        data,
      });
    }
  }

  async findAll() {
    return await this.prisma.productPriceHistory.findMany({
      take: 10,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
