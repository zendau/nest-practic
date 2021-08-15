import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { FilesModule } from 'src/files/files.module';
import { Post } from './posts.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    FilesModule,
    UsersModule,
    SequelizeModule.forFeature([Post]),
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
