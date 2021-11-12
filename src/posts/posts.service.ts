import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    { id: 1, authorId: 1, title: 'Article 1' },
    { id: 2, authorId: 1, title: 'Article 2' },
    { id: 3, authorId: 2, title: 'Article 3' },
    { id: 4, authorId: 2, title: 'Article 4' },
  ];

  findAllByAuthorId(authorId: number): Post[] {
    return this.posts.filter((post) => post.authorId === Number(authorId));
  }

  findAllByName(userQuery: string): Post[] {
    return this.posts.filter((post) =>
      post.title.toLowerCase().includes(userQuery.toLowerCase()),
    );
  }

  findOne(postId: number): Post {
    return this.posts.find((post) => post.id === postId);
  }

  findAll(): Post[] {
    return this.posts;
  }
}
