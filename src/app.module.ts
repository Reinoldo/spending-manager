import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpendingsModule } from './spendings/spendings.module';

@Module({
  imports: [SpendingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
