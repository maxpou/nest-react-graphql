import { Module } from '@nestjs/common';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';
import { CompaniesResolver } from './companies.resolver';
import { CompaniesService } from './companies.service';
import { MaterialsService } from './materials.service';

@Module({
  imports: [],
  providers: [
    OrdersService,
    OrdersResolver,
    CompaniesService,
    CompaniesResolver,
    MaterialsService,
  ],
})
export class OrdersModule {}
