import { ProductService } from './product.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreateProduct } from './dto/create-product'
import {UpdateProduct} from "./dto/update-product"

@Controller('product')
export class ProductController {

    constructor(private productServies: ProductService) {}

    // @Get(':id')
    // getProduct(@Param() params) : string {
    //     return `This action returns a #${params.id} cat`
    // }

    @Get('/id/:id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} cat`
    }

    @Post()
    async create(@Body() createProductDto: CreateProduct) {
        console.log(createProductDto)
        return `created ${createProductDto.title} with size ${createProductDto.size}`
    }


    
    @Put(':id')
    update(@Param('id') id: string, @Body() updateProducttDto: UpdateProduct) {
        return `This action updates a #${id} product on new value - ${updateProducttDto.title} and ${updateProducttDto.size}`
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} product`
    }

    // with services
    @Get("/all")
    getAll() {
        return this.productServies.findAll()
    }

    @Post("/add")
    createOne(@Body() createProductDto: CreateProduct) {
        return this.productServies.create(createProductDto)
    }

    @Put("/update/:id")
    updateOne(@Param('id') id: string, @Body() updateProducttDto: UpdateProduct) {
        return this.productServies.update(id, updateProducttDto)
    }

}
