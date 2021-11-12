import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Post } from './models/post.model';
import { User } from './models/user.model';
import { PostsService } from './posts.service';
import { UsersService } from './users.service';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly usersService: UsersService,
  ) {}

  @Query((returns) => Post)
  post(@Args({ name: 'id', type: () => ID }) id: number): Post {
    return this.postsService.findOne(id);
  }

  @Query((returns) => [Post])
  posts(
    @Args('title', { nullable: true, description: 'filter by post title' })
    userQuery?: string,
  ): Post[] {
    if (userQuery) {
      return this.postsService.findAllByName(userQuery);
    }
    return this.postsService.findAll();
  }

  @ResolveField((of) => User)
  user(@Parent() post: Post): User {
    return this.usersService.findById(post.authorId);
  }
}
