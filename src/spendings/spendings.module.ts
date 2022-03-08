import { Module } from '@nestjs/common';
import { SpendingsService } from './spendings.service';
import { SpendingsController } from './spendings.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SpendingsController],
  providers: [SpendingsService, PrismaService],
})
export class SpendingsModule {}
