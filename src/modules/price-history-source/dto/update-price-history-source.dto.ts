import { PartialType } from '@nestjs/mapped-types';
import { CreatePriceHistorySourceDto } from './create-price-history-source.dto';

export class UpdatePriceHistorySourceDto extends PartialType(CreatePriceHistorySourceDto) {}
