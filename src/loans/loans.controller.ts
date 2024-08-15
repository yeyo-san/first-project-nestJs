import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LoansService } from './loans.service';

@Controller('/quickloan/loans')
export class LoansController {
    constructor(private readonly loansServices: LoansService){}

    @Post()
    createLoan(@Body() createLoan: any) {
        return 'Loan created';
    }

    @Get(':id')
    getLoanStatus(@Param('id') id: string) {
        return `Status of loan ${id}`;
    }
}