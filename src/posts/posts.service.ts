import { UsersService } from './../users/users.service';
import { FilesService } from './../files/files.service';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './posts.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PostsService {

  constructor(
    private fileSerive: FilesService,
    private usersService: UsersService,
    @InjectModel(Post)
    private postModel: typeof Post) {}

  async create(postDto: CreatePostDto, file: Express.Multer.File) {
      const image = await this.fileSerive.createFile(file)
      const post = await this.postModel.create({...postDto, image})
      return post
  }

  async findAll(id: number) {
    const posts = await this.usersService.getAllUserPosts(id)
    return posts.posts
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
