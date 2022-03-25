import { Args, Mutation, Resolver } from '@nestjs/graphql';

import {
  ProductCreateArgs,
  ProductCreateOutput,
} from '../dto/product.create.dto';
import { ProductService } from '../product.service';

@Resolver()
export class ProductMutationsResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => ProductCreateOutput)
  public async productCreate(@Args() args: ProductCreateArgs) {
    return this.productService.create(args);
  }
}
