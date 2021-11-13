import { Module } from '@nestjs/common';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';
import { CompaniesResolver } from './companies.resolver';
import { CompaniesService } from './companies.service';

@Module({
  imports: [],
  providers: [
    OrdersService,
    OrdersResolver,
    CompaniesService,
    CompaniesResolver,
  ],
})
export class OrdersModule {}
