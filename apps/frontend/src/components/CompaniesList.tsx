import { useQuery } from '@apollo/client';
import { List, Panel } from 'rsuite';
import { GET_COMPANIES, CompaniesData } from '../graphql/getCompanies';
import { Error } from './Error';

export function CompaniesList() {
  const { loading, error, data } = useQuery<CompaniesData>(GET_COMPANIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <Error />;

  return (
    <div>
      <Panel header="List of companies" bordered shaded>
        <List>
          {data &&
            data.companies.map((company) => (
              <List.Item key={company.id}>{company.name}</List.Item>
            ))}
        </List>
      </Panel>
    </div>
  );
}
