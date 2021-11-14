import gql from 'graphql-tag';

export const getCompanies = gql`
  query Orders {
    companies {
      id
      name
    }
  }
`;
