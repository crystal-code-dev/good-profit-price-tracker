import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreatePriceHistorySourceDto } from './dto/create-price-history-source.dto';
import { UpdatePriceHistorySourceDto } from './dto/update-price-history-source.dto';

@Injectable()
export class PriceHistorySourceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPriceHistorySourceDto: CreatePriceHistorySourceDto) {
    await this.prisma.priceHistorySource.create({
      data: {
        ...createPriceHistorySourceDto,
      },
    });
  }

  async findAll() {
    return await this.prisma.priceHistorySource.findMany();
  }

  async findOne(idPriceHistorySourcePk: string) {
    return await this.prisma.priceHistorySource.findUnique({
      where: { idPriceHistorySourcePk },
    });
  }

  async update(
    idPriceHistorySourcePk: string,
    updatePriceHistorySourceDto: UpdatePriceHistorySourceDto
  ) {
    await this.prisma.priceHistorySource.update({
      where: { idPriceHistorySourcePk },
      data: {
        ...updatePriceHistorySourceDto,
      },
    });
  }

  async remove(idPriceHistorySourcePk: string) {
    await this.prisma.priceHistorySource.delete({
      where: { idPriceHistorySourcePk },
    });
  }
}
