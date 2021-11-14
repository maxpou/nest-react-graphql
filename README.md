# nest-react-graphql

<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="500" src="https://github.com/maxpou/nest-react-graphql/blob/main/docs/schema.png" alt="Application schema"></a></p>

A React&NestJS application that integrates with [GraphQL](https://graphql.org/).


## 🛠 Tools

- [NestJS](https://nestjs.com/) BE Framework
- [React](https://reactjs.org/) FE Framework
- [GraphQL](https://graphql.org/) for BE+FE
- [Apollo](https://www.apollographql.com/) for BE+FE
- [TypeScript](https://www.typescriptlang.org/docs/) for BE+FE
- [GraphQL Code Generator](https://www.graphql-code-generator.com/) for FE to generate GraphQL models

_Note:_ this project uses Nestjs's ["code first" approach](https://docs.nestjs.com/graphql/quick-start#code-first) to generate GraphQL models.

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
