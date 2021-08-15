import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import * as path from 'path'
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FilesService {
    async createFile(file : Express.Multer.File) : Promise<string>  {
        if (file.mimetype.includes("image")) {
            
            const foulder = "public"
            
            const fileExt = path.extname(file.originalname).slice(1)

            if (!existsSync(foulder)){
                mkdirSync(foulder);
            }

            const fileName = `${uuidv4()}.${fileExt}`

            const ws = createWriteStream(path.resolve(foulder, fileName))
            ws.write(file.buffer)
            return fileName
        } else {
            throw new HttpException('Ошибка при записи файла', HttpStatus.BAD_REQUEST)
        }
    }
}
