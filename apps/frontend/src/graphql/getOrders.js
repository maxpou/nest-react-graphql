import gql from 'graphql-tag';

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
