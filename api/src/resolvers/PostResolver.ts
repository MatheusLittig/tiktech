import Post from '../models/Post'
import { Resolver, Query } from 'type-graphql'

@Resolver()
export default class PostResolver {
  @Query(() => [Post])
  posts() {
    return Post.find()
  }
}
