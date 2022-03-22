import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';

import { Product } from '../models/product.model';

@ObjectType()
export class ProductCreateOutput {
  @Field(() => Product)
  product: Product;
}

@InputType()
export class ProductCreateInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  image: string;
}

@ArgsType()
export class ProductCreateArgs {
  @Field(() => ProductCreateInput)
  input: ProductCreateInput;
}
