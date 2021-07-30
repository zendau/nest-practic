import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { InjectModel } from '@nestjs/mongoose';
import {Product as ProductModel, ProductDocument} from "./schemas/product.schema"
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

    private readonly products: Product[] = []

    constructor(@InjectModel(ProductModel.name) private productModel: Model<ProductDocument>) {
    }

    async create(product: Product) : Promise<ProductModel> {
        this.products.push(product)
        const createdProduct = new this.productModel(product)
        return createdProduct.save()
    }

    findAll(): Promise<Product[]> {
        return this.productModel.find({}).exec()
    }

    update(id, newData) {
        return this.productModel.findByIdAndUpdate(id, newData)
    }

}
