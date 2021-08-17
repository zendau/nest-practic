import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Post as PostModel } from './posts.model';

@ApiTags('Post module')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({summary: 'Создание поста'})
  @ApiResponse({status: 200, type: PostModel})
  @Post("create")
  @UseInterceptors(FileInterceptor('file'))
  createPost(
    @Body() postDto: CreatePostDto,
    @UploadedFile() file: Express.Multer.File
    ) {
    return this.postsService.create(postDto, file)
  }

  @ApiOperation({summary: 'Получение всех постов указанного пользователя'})
  @ApiResponse({status: 200, type: [PostModel]})
  @Get("/all/:id")
  findAll(@Param('id') id: number) {
    console.log(id)
    return this.postsService.findAll(id)
  }
}
