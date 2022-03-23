import * as Types from '../../generated/graphqlOperations';

import gql from 'graphql-tag';
import { ProductCardFragmentDoc } from '../molecules/ProductCard/ProductCard.generated';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type ReactiveFunction<TParam> = () => TParam;
export type ProductsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, title: string, description: string, image: string }> };


export const ProductsDocument = gql`
    query products {
  products {
    ...ProductCard
  }
}
    ${ProductCardFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a Vue component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useProductsQuery();
 */
export function useProductsQuery(options: VueApolloComposable.UseQueryOptions<ProductsQuery, ProductsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProductsQuery, ProductsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProductsQuery, ProductsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, {}, options);
}
export function useProductsLazyQuery(options: VueApolloComposable.UseQueryOptions<ProductsQuery, ProductsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProductsQuery, ProductsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProductsQuery, ProductsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, {}, options);
}
export type ProductsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ProductsQuery, ProductsQueryVariables>;