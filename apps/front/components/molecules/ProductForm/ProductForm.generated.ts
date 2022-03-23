import * as Types from '../../../generated/graphqlOperations';

import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type ReactiveFunction<TParam> = () => TParam;
export type ProductCreateMutationVariables = Types.Exact<{
  input: Types.ProductCreateInput;
}>;


export type ProductCreateMutation = { __typename?: 'Mutation', productCreate: { __typename?: 'ProductCreateOutput', product: { __typename?: 'Product', id: string, image: string } } };


export const ProductCreateDocument = gql`
    mutation productCreate($input: ProductCreateInput!) {
  productCreate(input: $input) {
    product {
      id
      image
    }
  }
}
    `;

/**
 * __useProductCreateMutation__
 *
 * To run a mutation, you first call `useProductCreateMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useProductCreateMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useProductCreateMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useProductCreateMutation(options: VueApolloComposable.UseMutationOptions<ProductCreateMutation, ProductCreateMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ProductCreateMutation, ProductCreateMutationVariables>>) {
  return VueApolloComposable.useMutation<ProductCreateMutation, ProductCreateMutationVariables>(ProductCreateDocument, options);
}
export type ProductCreateMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ProductCreateMutation, ProductCreateMutationVariables>;