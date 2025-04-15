import { PrismaClient } from '@prisma/client'
import noticias from '../../noticias.json'
const prisma = new PrismaClient()

async function main() {
  for (const noticia of noticias) {
    await prisma.noticia.upsert({
      where: { id: noticia.id },
      update: {},
      create: {
        id: noticia.id,
        titulo: noticia.titulo,
        subtitulo: noticia.subtitulo,
        url: noticia.url,
        imagem: noticia.imagem,
        editoria: noticia.editoria,
        data_hora_publicacao: new Date(noticia.data_hora_publicacao),
        conteudo: noticia.conteudo,
      },
    })
  }
  console.log('Database populed')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
