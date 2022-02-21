import { Injectable, Res } from '@nestjs/common';
import { CreateSpendingDto } from './dto/create-spending.dto';
import { UpdateSpendingDto } from './dto/update-spending.dto';
import { PrismaClient } from '@prisma/client';

import { Response } from 'express';

const prisma = new PrismaClient();

@Injectable()
export class SpendingsService {
  async create(
    createSpendingDto: CreateSpendingDto,
    @Res() response: Response,
  ) {
    try {
      await prisma.spendings.create({
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
      const allSpendings = await prisma.spendings.findMany();
      await prisma.$disconnect();
      return [allSpendings];
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    return;
  }

  update(id: number, updateSpendingDto: UpdateSpendingDto) {
    return `This action updates a #${id} spending`;
  }

  remove(id: number) {
    return `This action removes a #${id} spending`;
  }
}
