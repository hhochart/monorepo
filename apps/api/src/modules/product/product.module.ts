import { Module } from '@nestjs/common';

import { ProductService } from './product.service';
import { ProductMutationsResolver } from './resolvers/product.mutations.resolver';
import { ProductQueriesResolver } from './resolvers/product.queries.resolver';

@Module({
  providers: [ProductQueriesResolver, ProductMutationsResolver, ProductService],
})
export class ProductModule {}
