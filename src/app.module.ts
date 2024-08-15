import { Module } from '@nestjs/common';
import { LoansModule } from './loans/loans.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entitty';
import { AuthModule } from './auth/auth.module';
import { Loan } from './loans/entities/loan.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestfirstproject',
      entities: [User, Loan],
      synchronize: true
    }),
  LoansModule, UsersModule, AuthModule], 
})
export class AppModule {}
