import { Injectable, Res } from '@nestjs/common';
import { CreateSpendingDto } from './dto/create-spending.dto';
import { UpdateSpendingDto } from './dto/update-spending.dto';
import { Prisma, PrismaClient, Spendings } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { Response } from 'express';
import { Spending } from './entities/spending.entity';

@Injectable()
export class SpendingsService {
  constructor(private prisma: PrismaService) {}

  async create(
    createSpendingDto: CreateSpendingDto,
    @Res() response: Response,
  ) {
    try {
      await this.prisma.spendings.create({
        data: {
          ...createSpendingDto,
        },
      });

      return response.json({
        sucesso: 0,
      });
    } catch (error) {
      console.log(error);
      return response.json({
        descricao: `Spending couldn't be created`,
        erro: error,
      });
    }
  }

  async findAll() {
    try {
      const allSpendings = await this.prisma.spendings.findMany();
      await this.prisma.$disconnect();
      return [allSpendings];
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    return;
  }

  async update(params: {
    where: Prisma.SpendingsWhereUniqueInput;
    data: Prisma.SpendingsUpdateInput;
  }): Promise<Spendings> {
    const { where, data } = params;
    return this.prisma.spendings.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.SpendingsWhereUniqueInput): Promise<Spendings> {
    try {
      return this.prisma.spendings.delete({
        where,
      });
    } catch (error) {}
  }
}
