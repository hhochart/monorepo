import { Injectable, NotFoundException } from '@nestjs/common';
import { CART } from './consts/cart.const';

@Injectable()
export class CartService {
  public getCart() {
    return CART;
  }

  public getTotal() {
    return CART.items.reduce((acc, item) => acc + item.price, 0);
  }
}
