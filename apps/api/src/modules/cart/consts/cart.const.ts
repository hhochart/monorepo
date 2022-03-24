import { CartItemStatus } from '../models/cart-item.model';
import { type Cart as CartType } from '../models/cart.model';

export const CART: CartType = {
  id: '1',
  items: [
    {
      id: '1',
      title: 'Bunny - Peluche lapin grise',
      description: 'Réf 150460',
      image:
        'https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_1000/img/peluche-lapin-grise-1000-10-31-150460_1.jpg',
      price: 200,
      status: CartItemStatus.DISPONIBLE,
    },
    {
      id: '2',
      title: 'Classique - Bougie en verre parfum musc blanche H 15 cm',
      description: 'Réf 136960',
      image:
        'https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_100/img/bougie-en-verre-parfum-musc-blanche-h-15-cm-1000-8-20-136960_3.jpg',
      price: 10,
      status: CartItemStatus.DISPONIBLE,
    },
    {
      id: '3',
      title: 'Plante artificielle Aloe Vera et pot en céramique blanche',
      description: 'Réf 188155',
      image:
        'https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_100/img/plante-artificielle-aloe-vera-et-pot-en-ceramique-blanche-1000-16-6-188155_1.jpg',
      price: 150,
      status: CartItemStatus.SOLD_OUT,
    },
  ],
};
