import { Module } from '@nestjs/common';

import { GraphqlModule } from './graphql/graphql.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [GraphqlModule, ProductModule],
})
export class AppModule {}
