import { Parent, ResolveField, Resolver, Query } from '@nestjs/graphql';
import { Order } from './models/order.model';
import { Company } from './models/company.model';
import { OrdersService } from './orders.service';
import { CompaniesService } from './companies.service';

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly companiesService: CompaniesService,
  ) {}

  @Query(() => [Company])
  companies(): Company[] {
    return this.companiesService.findAll();
  }

  @ResolveField(() => [Order])
  orders(@Parent() company: Company): Order[] {
    return this.ordersService.findAllByCompanyId(company.id);
  }
}
