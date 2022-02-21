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

  async update(
    id: number,
    updateSpendingDto: UpdateSpendingDto,
    @Res() response: Response,
  ) {
    try {
      await prisma.spendings.update({
        where: { id: id },
        data: { ...updateSpendingDto },
      });
      return response.json({
        sucesso: 0,
        descricao: `Spending ${id} updated successfully`,
      });
    } catch (error) {
      console.log(error);
      return response.json({
        descricao: `Spending couldn't be deleted`,
        erro: error,
      });
    }
  }

  async remove(id: number, @Res() response: Response) {
    try {
      await prisma.spendings.delete({
        where: { id: id },
      });
      return response.json({
        sucesso: 0,
        descricao: `Spending ${id} deleted successfully`,
      });
    } catch (error) {
      console.log(error);
      return response.json({
        descricao: `Spending couldn't be deleted`,
        erro: error,
      });
    }
    return `This action removes a #${id} spending`;
  }
}
