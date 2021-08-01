import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductModule } from './product/product.module'
import {ConfigModule} from "@nestjs/config"
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ProductModule, 
    MongooseModule.forRoot("mongodb://localhost/nest"),
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
   }),
   SequelizeModule.forRoot({
    dialect: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    autoLoadModels: true,
    synchronize: true,
    
  }),
   UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
