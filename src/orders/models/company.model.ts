import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Order } from './order.model';

@ObjectType()
@Directive('@key(fields: "id")')
export class Company {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => [Order], { description: 'Orders created by this guy' })
  orders?: Order[];
}
