import Post from '../models/Post'
import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import CreatePostInput from '../inputs/CreatePostInput'

@Resolver()
export default class PostResolver {
  @Query(() => [Post])
  posts() {
    return Post.find()
  }

  @Mutation(() => Post)
  async createPost(@Arg('data') data: CreatePostInput) {
    const post = Post.create(data)

    await post.save()

    return post
  }
}
