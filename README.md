# nest-react-graphql

## GraphQL

```graphql
query Orders {
  companies {
    id
    name
    orders {
      title
      quantity
      material {
        name
      }
    }
  }
}
```
