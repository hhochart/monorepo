import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Node } from '@/node/node.model';
import { ModelPartial } from '@/utils/modelPartial';

@ObjectType()
export class Product extends Node {
  constructor(input?: ModelPartial<Product>) {
    super(input);
  }

  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  image: string;
}
