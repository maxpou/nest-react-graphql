import gql from 'graphql-tag';
import { Query } from '../generated/types';

export interface OrdersData {
  orders: Query['orders'];
}

export const GET_ORDERS = gql`
  query Orders($title: String) {
    orders(title: $title) {
      id
      title
      quantity
      material {
        name
      }
      company {
        name
      }
    }
  }
`;
