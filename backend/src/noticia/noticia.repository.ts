import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Noticia } from '@prisma/client'
import { CreateNoticiaDto } from './dto/create-noticia.dto'
import { UpdateNoticiaDto } from './dto/update-noticia.dto'

@Injectable()
export class NoticiaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateNoticiaDto): Promise<Noticia> {
    return this.prisma.noticia.create({
      data: {
        titulo: data.titulo,
        subtitulo: data.subtitulo,
        url: data.url,
        imagem: data.imagem,
        editoria: data.editoria,
        data_hora_publicacao: new Date(data.data_hora_publicacao ?? new Date()),
        conteudo: data.conteudo,
      },
    })
  }

  async findAll(): Promise<Noticia[]> {
    return this.prisma.noticia.findMany()
  }

  async findOne(id: number): Promise<Noticia | null> {
    return this.prisma.noticia.findUnique({ where: { id } })
  }

  async update(id: number, data: UpdateNoticiaDto): Promise<Noticia> {
    return this.prisma.noticia.update({
      where: { id },
      data: {
        titulo: data.titulo,
        subtitulo: data.subtitulo,
        url: data.url,
        imagem: data.imagem,
        editoria: data.editoria,
        data_hora_publicacao: new Date(data.data_hora_publicacao ?? new Date()),
        conteudo: data.conteudo,
      },
    })
  }

  async remove(id: number): Promise<Noticia> {
    return this.prisma.noticia.delete({ where: { id } })
  }
}
