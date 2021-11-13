import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Company } from './company.model';

@ObjectType()
@Directive('@key(fields: "id")')
export class Order {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  quantity: number;

  @Field((type) => Int)
  companyId: number;

  @Field((type) => Company)
  company?: Company;
}
