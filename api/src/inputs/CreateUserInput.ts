import { Field, InputType } from 'type-graphql'

@InputType()
export default class CreateUserInput {
  @Field()
  email: string

  @Field()
  name: string

  @Field()
  password: string

  @Field()
  avatar: string
}
