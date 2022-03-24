import * as Types from '../../../__generated__/graphqlOperations';

import gql from 'graphql-tag';
import { CartItemCardFragmentDoc } from '../cartItemCard/CartItemCard.generated';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type ReactiveFunction<TParam> = () => TParam;
export type CartItemsGridQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CartItemsGridQuery = { __typename?: 'Query', cart: { __typename?: 'Cart', total: number, items: Array<{ __typename?: 'CartItem', id: string, title: string, description: string, image: string, status: Types.CartItemStatus, price: number }> } };


export const CartItemsGridDocument = gql`
    query cartItemsGrid {
  cart {
    total
    items {
      ...CartItemCard
    }
  }
}
    ${CartItemCardFragmentDoc}`;

/**
 * __useCartItemsGridQuery__
 *
 * To run a query within a Vue component, call `useCartItemsGridQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartItemsGridQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCartItemsGridQuery();
 */
export function useCartItemsGridQuery(options: VueApolloComposable.UseQueryOptions<CartItemsGridQuery, CartItemsGridQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CartItemsGridQuery, CartItemsGridQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CartItemsGridQuery, CartItemsGridQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CartItemsGridQuery, CartItemsGridQueryVariables>(CartItemsGridDocument, {}, options);
}
export function useCartItemsGridLazyQuery(options: VueApolloComposable.UseQueryOptions<CartItemsGridQuery, CartItemsGridQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CartItemsGridQuery, CartItemsGridQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CartItemsGridQuery, CartItemsGridQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<CartItemsGridQuery, CartItemsGridQueryVariables>(CartItemsGridDocument, {}, options);
}
export type CartItemsGridQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CartItemsGridQuery, CartItemsGridQueryVariables>;