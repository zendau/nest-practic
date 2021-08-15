import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post("create")
  @UseInterceptors(FileInterceptor('file'))
  createPost(
    @Body() postDto: CreatePostDto,
    @UploadedFile() file: Express.Multer.File
    ) {
    return this.postsService.create(postDto, file)
  }

  @Get("/all/:id")
  findAll(@Param('id') id: number) {
    console.log(id)
    return this.postsService.findAll(id)
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
