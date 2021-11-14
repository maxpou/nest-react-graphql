import { useQuery } from '@apollo/client';
import { List } from 'rsuite';
import { getCompanies } from '../graphql/getCompanies';
import { Error } from './Error';

export function CompaniesList() {
  const { loading, error, data } = useQuery(getCompanies);

  if (loading) return <p>Loading...</p>;
  if (error) return <Error />;

  return (
    <List>
      {data.companies.map((company: any) => (
        <List.Item key={company.id}>{company.name}</List.Item>
      ))}
    </List>
  );
}
