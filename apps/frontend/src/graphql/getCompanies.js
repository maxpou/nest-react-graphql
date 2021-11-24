import gql from 'graphql-tag';

export const GET_COMPANIES = gql`
  query Orders {
    companies {
      id
      name
    }
  }
`;
