import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Input, InputGroup, List, Panel } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { GET_ORDERS, OrdersData } from '../graphql/getOrders';
import { Error } from './Error';
import { applyFeesToPrice } from 'fees';
import { QueryOrdersArgs } from '../generated/types';

export function OrdersList(): JSX.Element {
  const [filterText, setFilterText] = useState<string>('');
  const { loading, error, data } = useQuery<OrdersData, QueryOrdersArgs>(
    GET_ORDERS,
    {
      variables: { title: filterText },
    },
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <Error />;

  return (
    <div>
      <Panel header="List of orders" bordered shaded>
        <div style={{ padding: '0px 0px 25px', width: '300px' }}>
          <InputGroup inside>
            <Input
              placeholder="Filter orders..."
              value={filterText}
              onChange={setFilterText}
            />
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
        </div>
        <List>
          {data &&
            data.orders.map((order) => (
              <List.Item key={order.id}>
                {order.title} in {order.material.name} (by {order.company.name})
                - {order.quantity} pieces needed
                <br />
                total transaction:{' '}
                {applyFeesToPrice(order.quantity * order.unitPrice)}€ (including{' '}
                {order.feesPercentage}% transation fees)
              </List.Item>
            ))}
        </List>
      </Panel>
    </div>
  );
}
