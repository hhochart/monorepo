import { Module } from '@nestjs/common';

import { GraphqlModule } from './graphql/graphql.module';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';

@Module({
  imports: [GraphqlModule, ProductModule, CartModule],
})
export class AppModule {}
