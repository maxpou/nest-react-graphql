import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Order } from './models/order.model';
import { Company } from './models/company.model';
import { OrdersService } from './orders.service';
import { CompaniesService } from './companies.service';

@Resolver((of) => Order)
export class OrdersResolver {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly companiesService: CompaniesService,
  ) {}

  @Query((returns) => Order)
  order(@Args({ name: 'id', type: () => ID }) id: number): Order {
    return this.ordersService.findOne(id);
  }

  @Query((returns) => [Order])
  orders(
    @Args('title', { nullable: true, description: 'filter by order title' })
    userQuery?: string,
  ): Order[] {
    if (userQuery) {
      return this.ordersService.findAllByName(userQuery);
    }
    return this.ordersService.findAll();
  }

  @ResolveField((of) => Company)
  company(@Parent() order: Order): Company {
    return this.companiesService.findById(order.companyId);
  }
}
