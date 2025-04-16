import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Noticia } from '@prisma/client'
import { CreateNoticiaDto } from './dto/create-noticia.dto'
import { UpdateNoticiaDto } from './dto/update-noticia.dto'
import { NoticiaRepository } from './noticia.repository'

@Injectable()
export class NoticiaService {
  constructor(private readonly noticiaRepo: NoticiaRepository) {}

  async create(data: CreateNoticiaDto): Promise<Noticia> {
    return this.noticiaRepo.create(data)
  }

  async findAll(): Promise<Noticia[]> {
    return this.noticiaRepo.findAll()
  }

  async findOne(id: number): Promise<Noticia | null> {
    return this.noticiaRepo.findOne(id)
  }

  async update(id: number, data: UpdateNoticiaDto): Promise<Noticia> {
    return this.noticiaRepo.update(id, data)
  }

  async remove(id: number): Promise<Noticia> {
    return this.noticiaRepo.remove(id)
  }
}