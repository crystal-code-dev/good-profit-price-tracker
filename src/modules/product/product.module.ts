import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScraperModule } from '../scraper/scraper.module';
import { ProductController } from './product.controller';
import { ProductSchema } from './product.schema';
import { ProductService } from './product.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    ScraperModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
