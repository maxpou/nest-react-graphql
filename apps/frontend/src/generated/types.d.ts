export type Maybe<T> = T | null;
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

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Orders created by this company */
  orders: Array<Order>;
};

export type Material = {
  __typename?: 'Material';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  company: Company;
  companyId: Scalars['Int'];
  feesPercentage: Scalars['Float'];
  id: Scalars['ID'];
  material: Material;
  materialId: Scalars['Int'];
  quantity: Scalars['Int'];
  title: Scalars['String'];
  unitPrice: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  companies: Array<Company>;
  order: Order;
  orders: Array<Order>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrdersArgs = {
  title?: Maybe<Scalars['String']>;
};
