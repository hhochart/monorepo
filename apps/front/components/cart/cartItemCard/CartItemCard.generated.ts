import * as Types from '../../../__generated__/graphqlOperations';

import gql from 'graphql-tag';
export type CartItemCardFragment = { __typename?: 'CartItem', id: string, title: string, description: string, image: string, status: Types.CartItemStatus, price: number };

export const CartItemCardFragmentDoc = gql`
    fragment CartItemCard on CartItem {
  id
  title
  description
  image
  status
  price
}
    `;