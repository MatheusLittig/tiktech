/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'

import PostResolver from './resolvers/PostResolver'
import UserResolver from './resolvers/UserResolver'

async function main(): Promise<void> {
  const connection = await createConnection()
  const schema = await buildSchema({
    resolvers: [PostResolver, UserResolver]
  })

  const server = new ApolloServer({ schema })

  await server.listen(4000)

  console.log('Server has started at port 4000')
}

main()
