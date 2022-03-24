import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Node } from '@/node/node.model';
import { ModelPartial } from '@/utils/modelPartial';

export enum CartItemStatus {
  DISPONIBLE = 'DISPONIBLE',
  SOLD_OUT = 'SOLD_OUT',
}

registerEnumType(CartItemStatus, {
  name: 'CartItemStatus',
});

@ObjectType()
export class CartItem extends Node {
  constructor(input?: ModelPartial<CartItem>) {
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

  @Field()
  price: number;

  @Field(() => CartItemStatus)
  status: CartItemStatus;
}
