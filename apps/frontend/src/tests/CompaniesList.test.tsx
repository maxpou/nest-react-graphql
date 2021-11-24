import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { CompaniesList } from '../components/CompaniesList';
import { GET_COMPANIES } from '../graphql/getCompanies';

const mockCompanies = [
  {
    request: {
      query: GET_COMPANIES,
    },
    result: {
      data: {
        companies: [
          { id: '1', name: 'Herman Miller' },
          { id: '2', name: 'Maxence Poutord LLC' },
          { id: '3', name: 'Bart Simpson Inc.' },
        ],
      },
    },
  },
];

test('renders learn react link', async () => {
  render(
    <MockedProvider mocks={mockCompanies} addTypename={false}>
      <CompaniesList />
    </MockedProvider>,
  );
  await waitForElementToBeRemoved(() => screen.getByText(/Loading/i));
  screen.getByText(/Bart Simpson Inc/i);
  screen.getByText(/Herman Miller/i);
});
