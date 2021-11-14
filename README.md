# nest-react-graphql

![Schema](./docs/schema.png)

## Commands

## 🛠 Tools

- [NestJS](https://nestjs.com/) BE Framework
- [React](https://reactjs.org/) FE Framework
- [GraphQL](https://graphql.org/) for BE+FE
- [Apollo](https://www.apollographql.com/) for BE+FE
- [TypeScript](https://www.typescriptlang.org/docs/) for BE+FE
- [GraphQL Code Generator](https://www.graphql-code-generator.com/) for FE to generate GraphQL models

## GraphQL

Query sample:

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
