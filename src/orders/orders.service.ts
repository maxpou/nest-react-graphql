import { Injectable } from '@nestjs/common';
import { Order } from './models/order.model';

@Injectable()
export class OrdersService {
  private orders: Order[] = [
    {
      id: 1,
      title: 'Chair wheels',
      quantity: 500,
      companyId: 1,
      materialId: 4,
    },
    { id: 2, companyId: 1, title: 'Arm rest', quantity: 200, materialId: 4 },
    { id: 3, companyId: 3, title: 'Y Stick', quantity: 5, materialId: 3 },
    { id: 4, companyId: 2, title: 'spinning top', quantity: 4, materialId: 1 },
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
