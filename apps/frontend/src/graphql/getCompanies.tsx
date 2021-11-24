import { gql } from '@apollo/client';
import { Query } from '../generated/types';

export interface CompaniesData {
  companies: Query['companies'];
}

export const GET_COMPANIES = gql`
  query Orders {
    companies {
      id
      name
    }
  }
`;
