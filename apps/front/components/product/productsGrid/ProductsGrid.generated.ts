import * as Types from '../../../__generated__/graphqlOperations';

import gql from 'graphql-tag';
import { ProductCardFragmentDoc } from '../productCard/ProductCard.generated';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type ReactiveFunction<TParam> = () => TParam;
export type ProductsGridQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ProductsGridQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, title: string, description: string, image: string }> };


export const ProductsGridDocument = gql`
    query productsGrid {
  products {
    ...ProductCard
  }
}
    ${ProductCardFragmentDoc}`;

/**
 * __useProductsGridQuery__
 *
 * To run a query within a Vue component, call `useProductsGridQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsGridQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useProductsGridQuery();
 */
export function useProductsGridQuery(options: VueApolloComposable.UseQueryOptions<ProductsGridQuery, ProductsGridQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProductsGridQuery, ProductsGridQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProductsGridQuery, ProductsGridQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ProductsGridQuery, ProductsGridQueryVariables>(ProductsGridDocument, {}, options);
}
export function useProductsGridLazyQuery(options: VueApolloComposable.UseQueryOptions<ProductsGridQuery, ProductsGridQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProductsGridQuery, ProductsGridQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProductsGridQuery, ProductsGridQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<ProductsGridQuery, ProductsGridQueryVariables>(ProductsGridDocument, {}, options);
}
export type ProductsGridQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ProductsGridQuery, ProductsGridQueryVariables>;