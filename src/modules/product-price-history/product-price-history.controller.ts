import { Controller, Get, Post } from '@nestjs/common';
import { ProductPriceHistoryService } from './product-price-history.service';

@Controller('product-price-history')
export class ProductPriceHistoryController {
  constructor(
    private readonly productPriceHistoryService: ProductPriceHistoryService
  ) {}

  @Post('fetch-price-history-daily-cache')
  async fetchPriceHistoryDailyCache() {
    this.productPriceHistoryService.fetchPriceHistoryDailyCache();

    return {
      message: 'Job started: fetchPriceHistoryDailyCache',
    };
  }

  @Get()
  findAll() {
    return this.productPriceHistoryService.findAll();
  }
}
