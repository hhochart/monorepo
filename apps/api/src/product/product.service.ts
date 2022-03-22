import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuidv4 } from 'uuid';

import { PRODUCTS } from './consts/products.const';
import {
  ProductCreateArgs,
  ProductCreateOutput,
} from './dto/product.create.dto';
import { Product } from './models/product.model';

@Injectable()
export class ProductService {
  public getProduct(productId: Product['id']) {
    const product = PRODUCTS.find((product) => product.id === productId);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  public getProducts() {
    return PRODUCTS;
  }

  public create(args: ProductCreateArgs): ProductCreateOutput {
    const { input } = args;

    const product = new Product({
      id: uuidv4(),
      title: input.title,
      description: input.description,
      image: input.image,
    });

    return { product };
  }
}
