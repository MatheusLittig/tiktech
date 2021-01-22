import { Field, InputType } from 'type-graphql'

@InputType()
export default class CreatePostInput {
  @Field()
  description: string

  @Field()
  midia: string
}
