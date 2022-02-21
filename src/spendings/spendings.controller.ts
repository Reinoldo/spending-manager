import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  Patch,
} from '@nestjs/common';
import { Response } from 'express';
import { SpendingsService } from './spendings.service';
import { CreateSpendingDto } from './dto/create-spending.dto';
import { UpdateSpendingDto } from './dto/update-spending.dto';

@Controller('spendings')
export class SpendingsController {
  constructor(private readonly spendingsService: SpendingsService) {}

  @Post()
  create(
    @Body() createSpendingDto: CreateSpendingDto,
    @Res() response: Response,
  ) {
    return this.spendingsService.create(createSpendingDto, response);
  }

  @Get()
  findAll() {
    return this.spendingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spendingsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpendingDto: UpdateSpendingDto,
    @Res() response: Response,
  ) {
    return this.spendingsService.update(+id, updateSpendingDto, response);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() response: Response) {
    return this.spendingsService.remove(+id, response);
  }
}
