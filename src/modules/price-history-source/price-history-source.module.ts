import { Module } from '@nestjs/common';
import { PriceHistorySourceService } from './price-history-source.service';
import { PriceHistorySourceController } from './price-history-source.controller';

@Module({
  controllers: [PriceHistorySourceController],
  providers: [PriceHistorySourceService],
})
export class PriceHistorySourceModule {}
