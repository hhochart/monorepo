import * as Types from '../../../generated/graphqlOperations';

import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type ReactiveFunction<TParam> = () => TParam;
export type CreateProductMutationVariables = Types.Exact<{
  input: Types.ProductCreateInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', productCreate: { __typename?: 'ProductCreateOutput', product: { __typename?: 'Product', id: string, image: string } } };


export const CreateProductDocument = gql`
    mutation createProduct($input: ProductCreateInput!) {
  productCreate(input: $input) {
    product {
      id
      image
    }
  }
}
    `;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateProductMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(options: VueApolloComposable.UseMutationOptions<CreateProductMutation, CreateProductMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateProductMutation, CreateProductMutationVariables>>) {
  return VueApolloComposable.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
}
export type CreateProductMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateProductMutation, CreateProductMutationVariables>;