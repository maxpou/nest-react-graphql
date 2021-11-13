import { Injectable } from '@nestjs/common';
import { Order } from './models/order.model';

@Injectable()
export class OrdersService {
  private orders: Order[] = [
    { id: 1, companyId: 1, title: 'Order 1', quantity: 1 },
    { id: 2, companyId: 1, title: 'Order 2', quantity: 3 },
    { id: 3, companyId: 2, title: 'Order 3', quantity: 5 },
    { id: 4, companyId: 2, title: 'Order 4', quantity: 9 },
  ];

  findAllByCompanyId(companyId: number): Order[] {
    return this.orders.filter((order) => order.companyId === Number(companyId));
  }

  findAllByName(userQuery: string): Order[] {
    return this.orders.filter((order) =>
      order.title.toLowerCase().includes(userQuery.toLowerCase()),
    );
  }

  findOne(orderId: number): Order {
    return this.orders.find((order) => order.id === orderId);
  }

  findAll(): Order[] {
    return this.orders;
  }
}
