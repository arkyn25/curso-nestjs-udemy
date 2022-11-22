import { NotFoundError } from './../common/filters/errors/types/NotFoundError';
import { PostsRepository } from './repositories/posts.repository';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}
  create(createPostDto: CreatePostDto) {
    return this.postsRepository.create(createPostDto);
  }

  findAll() {
    return this.postsRepository.findAll();
  }

  async findOne(id: number) {
    const posts = await this.postsRepository.findOne(id);

    if (!posts) {
      throw new NotFoundError(`Posts with id ${id} not found`);
    }
    return posts;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postsRepository.update(id, updatePostDto);
  }

  remove(id: number) {
    return this.postsRepository.remove(id);
  }
}
