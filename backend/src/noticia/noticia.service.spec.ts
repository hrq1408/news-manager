import { Test, TestingModule } from '@nestjs/testing'
import { NoticiaService } from './noticia.service'
import { NoticiaRepository } from './noticia.repository'
import { CreateNoticiaDto } from './dto/create-noticia.dto'
import { UpdateNoticiaDto } from './dto/update-noticia.dto'
import { Noticia } from '@prisma/client'

describe('NoticiaService', () => {
  let service: NoticiaService
  let repository: jest.Mocked<NoticiaRepository>

  const mockNoticia: Noticia = {
    id: 1,
    titulo: 'Titulo de teste',
    subtitulo: 'Subtitulo de teste',
    url: 'https://teste.com',
    imagem: 'https://imagem.com/img.jpg',
    editoria: 'Politica',
    data_hora_publicacao: new Date('2025-04-10T12:00:00Z'),
    conteudo: 'Conteudo completo da noticia'
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NoticiaService,
        {
          provide: NoticiaRepository,
          useValue: {
            create: jest.fn().mockResolvedValue(mockNoticia),
            findAll: jest.fn().mockResolvedValue([mockNoticia]),
            findOne: jest.fn().mockResolvedValue(mockNoticia),
            update: jest.fn().mockResolvedValue(mockNoticia),
            remove: jest.fn().mockResolvedValue(mockNoticia)
          }
        }
      ]
    }).compile()

    service = module.get<NoticiaService>(NoticiaService)
    repository = module.get(NoticiaRepository)
  })

  it('should create a news item', async () => {
    const dto: CreateNoticiaDto = {
        ...mockNoticia,
        data_hora_publicacao: mockNoticia.data_hora_publicacao.toISOString(),
      }
      delete (dto as any).id

    const result = await service.create(dto)
    expect(result).toEqual(mockNoticia)
    expect(repository.create).toHaveBeenCalledWith(dto)
  })

  it('should return all news', async () => {
    const result = await service.findAll()
    expect(result).toEqual([mockNoticia])
    expect(repository.findAll).toHaveBeenCalled()
  })

  it('should return one news item by id', async () => {
    const result = await service.findOne(1)
    expect(result).toEqual(mockNoticia)
    expect(repository.findOne).toHaveBeenCalledWith(1)
  })

  it('should update a news item', async () => {
    const updateDto: UpdateNoticiaDto = { titulo: 'Novo título' }
    const result = await service.update(1, updateDto)
    expect(result).toEqual(mockNoticia)
    expect(repository.update).toHaveBeenCalledWith(1, updateDto)
  })

  it('should remove a news item', async () => {
    const result = await service.remove(1)
    expect(result).toEqual(mockNoticia)
    expect(repository.remove).toHaveBeenCalledWith(1)
  })
})
