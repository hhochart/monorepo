import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartFieldsResolver } from './resolvers/cart.fields.resolver';
import { CartQueriesResolver } from './resolvers/cart.queries.resolver';

@Module({
  providers: [CartQueriesResolver, CartService, CartFieldsResolver],
})
export class CartModule {}
