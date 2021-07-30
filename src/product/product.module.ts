import { ProductController } from './product.controller';
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import {Product, ProductSchema} from "./schemas/product.schema"
@Module({
  imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
