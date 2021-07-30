import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import {Document} from "mongoose"


export type ProductDocument = Product & Document

@Schema()
export class Product {
    @Prop({required: true})
    title: string

    @Prop()
    size: number
}

export const ProductSchema = SchemaFactory.createForClass(Product)