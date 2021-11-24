import { useQuery } from '@apollo/client';
import { List } from 'rsuite';
import { Company } from '../generated/types';
import { GET_COMPANIES } from '../graphql/getCompanies';
import { Error } from './Error';

export function CompaniesList() {
  const { loading, error, data } = useQuery<any>(GET_COMPANIES);

  console.log({ loading, error, data });

  if (loading) return <p>Loading...</p>;
  if (error) return <Error />;

  return (
    <div>
      <List>
        {data.companies.map((company: Company) => (
          <List.Item key={company.id}>{company.name}</List.Item>
        ))}
      </List>
    </div>
  );
}
