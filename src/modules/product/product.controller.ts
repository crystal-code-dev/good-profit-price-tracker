import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('scrape')
  async scrapeProduct(@Body('item') item: string) {
    return this.productService.scrapeAndSave(item);
  }
}
