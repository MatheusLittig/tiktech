import { Resolver, Query } from 'type-graphql'

@Resolver()
class BookResolver {
  @Query(() => String)
  hello() {
    return 'world'
  }
}

export default BookResolver
