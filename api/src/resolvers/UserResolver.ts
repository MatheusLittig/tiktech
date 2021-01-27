import User from '../models/User'
import { Resolver, Query, Mutation, Arg } from 'type-graphql'

import CreateUserInput from '../inputs/CreateUserInput'
import UpdateUserInput from '../inputs/UpdateUserInput'

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

  @Query(() => User)
  user(@Arg('id') id: string) {
    return User.findOne({ where: { id } })
  }

  @Mutation(() => User)
  async updateUser(@Arg('id') id: string, @Arg('data') data: UpdateUserInput) {
    const user = await User.findOne({ where: { id } })

    if (!user) throw new Error('User not found')

    Object.assign(user, data)

    await user.save()

    return user
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg('id') id: string) {
    const user = await User.findOne({ where: { id } })

    if (!user) throw new Error('User not found')

    await user.remove()

    return true
  }
}
