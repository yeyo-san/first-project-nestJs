import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entitty';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from 'src/filters/http-error.filter';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UsersService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter
    }
  ],
  controllers: [UsersController]
})
export class UsersModule {}
