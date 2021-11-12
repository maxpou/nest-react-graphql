import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    { authorId: 1, id: 1, title: 'Article 1' },
    { authorId: 1, id: 2, title: 'Article 2' },
    { authorId: 2, id: 3, title: 'Article 3' },
    { authorId: 2, id: 4, title: 'Article 4' },
  ];

  findAllByAuthorId(authorId: number): Post[] {
    return this.posts.filter((post) => post.authorId === Number(authorId));
  }

  findOne(postId: number): Post {
    return this.posts.find((post) => post.id === postId);
  }

  findAll(): Post[] {
    return this.posts;
  }
}
