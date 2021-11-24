import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Company } from './company.model';
import { Material } from './material.model';

@ObjectType()
@Directive('@key(fields: "id")')
export class Order {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field((type) => Int)
  quantity: number;

  @Field((type) => Int)
  companyId: number;

  @Field((type) => Company)
  company?: Company;

  @Field((type) => Int)
  materialId: number;

  @Field((type) => Material)
  material?: Material;
}
