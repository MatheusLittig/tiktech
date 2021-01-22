import User from '../models/User'
import { Resolver, Query, Mutation, Arg } from 'type-graphql'

import CreateUserInput from '../inputs/CreateUserInput'

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  posts() {
    return User.find()
  }

  @Mutation(() => User)
  async createUser(@Arg('data') data: CreateUserInput) {
    const user = User.create(data)

    await user.save()

    return user
  }
}
