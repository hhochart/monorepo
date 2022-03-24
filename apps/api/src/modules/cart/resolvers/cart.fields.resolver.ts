import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Cart } from '../models/cart.model';
import { CartService } from '../cart.service';

@Resolver(Cart)
export class CartFieldsResolver {
  constructor(private readonly cartService: CartService) {}

  @ResolveField(() => Number)
  total() {
    return this.cartService.getTotal();
  }
}
