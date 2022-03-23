import { Args, ID, Query, Resolver } from '@nestjs/graphql';

import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Resolver(Product)
export class ProductQueriesResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => Product, { nullable: true })
  product(
    @Args({ name: 'productId', type: () => ID }) productId: Product['id'],
  ) {
    return this.productService.getProduct(productId);
  }

  @Query(() => [Product])
  async products() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return this.productService.getProducts();
  }
}
