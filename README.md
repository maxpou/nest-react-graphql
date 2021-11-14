# nest-react-graphql

![Schema](./docs/schema.png)

## Commands

```bash
# install
npm install

# start app (requires npm7+)
npm start --workspace=frontend
npm start --workspace=backend

# generate schema
npm run generate --workspace=frontend
```

## 🛠 Tools

- [NestJS](https://nestjs.com/) BE Framework
- [React](https://reactjs.org/) FE Framework
- [GraphQL](https://graphql.org/) for BE+FE
- [Apollo](https://www.apollographql.com/) for BE+FE
- [TypeScript](https://www.typescriptlang.org/docs/) for BE+FE
- [GraphQL Code Generator](https://www.graphql-code-generator.com/) for FE to generate GraphQL models

_Note:_ this project uses Nestjs's ["code first" approach](https://docs.nestjs.com/graphql/quick-start#code-first) to generate GraphQL models.

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
