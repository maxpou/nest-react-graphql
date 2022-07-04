# nest-react-graphql

<p align="center">
  <img width="500" src="https://github.com/maxpou/nest-react-graphql/blob/main/docs/schema.png" alt="Application schema">
</p>

A React&NestJS application that integrates with [GraphQL](https://graphql.org/).

## 🛠 Tools

- [NestJS](https://nestjs.com/) BE Framework
- [React](https://reactjs.org/) FE Framework
- [GraphQL](https://graphql.org/) for BE+FE
- [Apollo](https://www.apollographql.com/) for BE+FE
- [TypeScript](https://www.typescriptlang.org/docs/) for BE+FE
- [GraphQL Code Generator](https://www.graphql-code-generator.com/) for FE to generate GraphQL models
- [Turborepo](https://turborepo.org) for the monorepo management

_Note:_

- this monorepo is a sandbox for experimenting Turborepo. [Here's my blog post about it](https://www.maxpou.fr/turborepo).
- this project uses Nestjs's ["code first" approach](https://docs.nestjs.com/graphql/quick-start#code-first) to generate GraphQL models.

## Commands

```bash
# install
npm install

# start app (requires npm8+)
npm start

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
