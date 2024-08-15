import { Module } from '@nestjs/common';
import { LoansController } from './loans.controller';
import { LoansService } from './loans.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from './entities/loan.entity';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from 'src/filters/http-error.filter';

@Module({
  imports: [TypeOrmModule.forFeature([Loan])],
  providers: [
    LoansService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter
    }
  ],
  controllers: [LoansController]
})
export class LoansModule {}
