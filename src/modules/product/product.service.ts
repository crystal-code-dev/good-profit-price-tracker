import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScraperService } from '../scraper/scraper.service';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    private readonly scraperService: ScraperService
  ) {}

  async scrapeAndSave(item: string): Promise<void> {
    await this.scraperService.scrapeProductsFromGoogle(item);
    // const product = new this.productModel(data);
    // return product.save();
  }
}
