import { Query, Resolver } from '@nestjs/graphql';
import { Cart } from '../models/cart.model';
import { CartService } from '../cart.service';

@Resolver(Cart)
export class CartQueriesResolver {
  constructor(private readonly cartService: CartService) {}

  @Query(() => Cart)
  cart() {
    return this.cartService.getCart();
  }
}
