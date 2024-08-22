import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { ScraperModule } from '../scraper/scraper.module';
import { ProductPriceHistoryController } from './product-price-history.controller';
import { ProductPriceHistoryService } from './product-price-history.service';

@Module({
  imports: [ScraperModule],
  controllers: [ProductPriceHistoryController],
  providers: [ProductPriceHistoryService, PrismaService],
})
export class ProductPriceHistoryModule {}
