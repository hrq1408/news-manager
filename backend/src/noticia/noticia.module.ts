// src/noticia/noticia.module.ts
import { Module } from '@nestjs/common'
import { NoticiaService } from './noticia.service'
import { NoticiaController } from './noticia.controller'
import { NoticiaRepository } from './noticia.repository'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [NoticiaController],
  providers: [NoticiaService, NoticiaRepository],
  exports: [NoticiaRepository],
})
export class NoticiaModule {}
