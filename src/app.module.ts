import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './database/prisma/prisma.module';
import { PriceHistorySourceModule } from './modules/price-history-source/price-history-source.module';
import { ProductPriceHistoryModule } from './modules/product-price-history/product-price-history.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    ProductPriceHistoryModule,
    ProductModule,
    PriceHistorySourceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
