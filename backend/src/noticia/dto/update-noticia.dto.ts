// src/noticia/dto/update-noticia.dto.ts
import { PartialType } from '@nestjs/mapped-types'
import { CreateNoticiaDto } from './create-noticia.dto'

export class UpdateNoticiaDto extends PartialType(CreateNoticiaDto) {}