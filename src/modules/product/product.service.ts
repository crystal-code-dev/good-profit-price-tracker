import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    await this.prisma.product.create({
      data: {
        ...createProductDto,
      },
    });
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(idProductPk: string) {
    return await this.prisma.product.findUnique({
      where: { idProductPk },
    });
  }

  async update(idProductPk: string, updateProductDto: UpdateProductDto) {
    await this.prisma.product.update({
      where: { idProductPk },
      data: {
        ...updateProductDto,
      },
    });
  }

  async remove(idProductPk: string) {
    await this.prisma.product.delete({
      where: { idProductPk },
    });
  }
}
