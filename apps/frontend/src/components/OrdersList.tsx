import { useQuery } from '@apollo/client';
import { Input, InputGroup, List } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { GET_ORDERS } from '../graphql/getOrders';
import { Error } from './Error';
import { useState } from 'react';
import { Order } from '../generated/types';

export function OrdersList() {
  const [filterText, setFilterText] = useState('');
  const { loading, error, data } = useQuery(GET_ORDERS, {
    variables: { title: filterText },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <Error />;

  return (
    <div>
      <div style={{ padding: '50px 0px 25px', width: '300px' }}>
        <InputGroup inside>
          <Input
            placeholder="search text..."
            value={filterText}
            onChange={setFilterText}
          />
          <InputGroup.Button>
            <SearchIcon />
          </InputGroup.Button>
        </InputGroup>
      </div>
      <List>
        {data.orders.map((order: Order) => (
          <List.Item key={order.id}>
            {order.title} (by {order.company.name}) - {order.quantity} pieces
            needed
            <br />
            built with {order.material.name}
          </List.Item>
        ))}
      </List>
    </div>
  );
}
