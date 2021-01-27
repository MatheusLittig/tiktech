import { Field, InputType } from 'type-graphql'

@InputType()
export default class UpdateUserInput {
  @Field({ nullable: true })
  email?: string

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  password?: string

  @Field({ nullable: true })
  avatar?: string
}
