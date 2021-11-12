import { Parent, ResolveField, Resolver, Query } from '@nestjs/graphql';
import { Post } from './models/post.model';
import { User } from './models/user.model';
import { PostsService } from './posts.service';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly usersService: UsersService,
  ) {}

  @Query((returns) => [User])
  users(): User[] {
    return this.usersService.findAll();
  }

  @ResolveField(() => [Post])
  posts(@Parent() user: User): Post[] {
    return this.postsService.findAllByAuthorId(user.id);
  }
}
