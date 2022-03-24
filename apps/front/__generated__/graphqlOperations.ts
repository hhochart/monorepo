export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['ID'];
  items: Array<CartItem>;
  total: Scalars['Float'];
};

export type CartItem = {
  __typename?: 'CartItem';
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  price: Scalars['Float'];
  status: CartItemStatus;
  title: Scalars['String'];
};

export enum CartItemStatus {
  Disponible = 'DISPONIBLE',
  SoldOut = 'SOLD_OUT'
}

export type Mutation = {
  __typename?: 'Mutation';
  productCreate: ProductCreateOutput;
};


export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};

export type Product = {
  __typename?: 'Product';
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  title: Scalars['String'];
};

export type ProductCreateInput = {
  description: Scalars['String'];
  image: Scalars['String'];
  title: Scalars['String'];
};

export type ProductCreateOutput = {
  __typename?: 'ProductCreateOutput';
  product: Product;
};

export type Query = {
  __typename?: 'Query';
  cart: Cart;
  product?: Maybe<Product>;
  products: Array<Product>;
};


export type QueryProductArgs = {
  productId: Scalars['ID'];
};

export type CartItemCardFragment = { __typename?: 'CartItem', id: string, title: string, description: string, image: string, status: CartItemStatus, price: number };

export type CartItemsGridQueryVariables = Exact<{ [key: string]: never; }>;


export type CartItemsGridQuery = { __typename?: 'Query', cart: { __typename?: 'Cart', total: number, items: Array<{ __typename?: 'CartItem', id: string, title: string, description: string, image: string, status: CartItemStatus, price: number }> } };

export type ProductCardFragment = { __typename?: 'Product', id: string, title: string, description: string, image: string };

export type CreateProductMutationVariables = Exact<{
  input: ProductCreateInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', productCreate: { __typename?: 'ProductCreateOutput', product: { __typename?: 'Product', id: string, image: string } } };

export type ProductsGridQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsGridQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, title: string, description: string, image: string }> };


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    