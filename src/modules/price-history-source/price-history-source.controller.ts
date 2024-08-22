import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePriceHistorySourceDto } from './dto/create-price-history-source.dto';
import { UpdatePriceHistorySourceDto } from './dto/update-price-history-source.dto';
import { PriceHistorySourceService } from './price-history-source.service';

@Controller('price-history-source')
export class PriceHistorySourceController {
  constructor(
    private readonly priceHistorySourceService: PriceHistorySourceService
  ) {}

  @Post()
  create(@Body() createPriceHistorySourceDto: CreatePriceHistorySourceDto) {
    return this.priceHistorySourceService.create(createPriceHistorySourceDto);
  }

  @Get()
  findAll() {
    return this.priceHistorySourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.priceHistorySourceService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePriceHistorySourceDto: UpdatePriceHistorySourceDto
  ) {
    return this.priceHistorySourceService.update(
      id,
      updatePriceHistorySourceDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.priceHistorySourceService.remove(id);
  }
}
