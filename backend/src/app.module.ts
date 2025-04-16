import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { NoticiaModule } from './noticia/noticia.module'

@Module({
  imports: [PrismaModule, NoticiaModule],
})
export class AppModule {}