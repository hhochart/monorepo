import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Node } from '@/node/node.model';
import { ModelPartial } from '@/utils/modelPartial';
import { CartItem } from './cart-item.model';

@ObjectType()
export class Cart extends Node {
  constructor(input?: ModelPartial<Cart>) {
    super(input);
  }

  @Field(() => ID)
  id: string;

  @Field(() => [CartItem])
  items: CartItem[];
}
