import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { OrdersList } from '../components/OrdersList';
import { GET_ORDERS } from '../graphql/getOrders';

const mockCompanies = [
  {
    request: {
      query: GET_ORDERS,
      variables: { title: '' },
    },
    result: {
      data: {
        orders: [
          {
            id: '1',
            title: 'Chair wheels',
            quantity: 500,
            unitPrice: 24,
            feesPercentage: 5,
            material: {
              name: 'Plastic',
            },
            company: {
              name: 'Herman Miller',
            },
          },
        ],
      },
    },
  },
];

test('renders order list', async () => {
  render(
    <MockedProvider mocks={mockCompanies} addTypename={false}>
      <OrdersList />
    </MockedProvider>,
  );
  await waitForElementToBeRemoved(() => screen.getByText(/Loading/i));
  screen.getByText(/Chair wheels/i);
  screen.getByText(/by Herman Miller/i);
  screen.getByText(/500 pieces needed/i);
});
