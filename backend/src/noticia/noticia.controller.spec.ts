import { Test, TestingModule } from '@nestjs/testing'
import { NoticiaController } from './noticia.controller'
import { NoticiaService } from './noticia.service'
import { CreateNoticiaDto } from './dto/create-noticia.dto'
import { UpdateNoticiaDto } from './dto/update-noticia.dto'

describe('NoticiaController', () => {
  let controller: NoticiaController
  let service: NoticiaService

  const mockNoticiaService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoticiaController],
      providers: [
        {
          provide: NoticiaService,
          useValue: mockNoticiaService
        }
      ]
    }).compile()

    controller = module.get<NoticiaController>(NoticiaController)
    service = module.get<NoticiaService>(NoticiaService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should call create with correct data', async () => {
    const dto: CreateNoticiaDto = {
      titulo: 'Título',
      subtitulo: 'Sub',
      url: 'url',
      imagem: 'img.jpg',
      editoria: 'Política',
      data_hora_publicacao: new Date().toISOString(),
      conteudo: 'Conteúdo'
    }

    mockNoticiaService.create.mockResolvedValue({ id: 1, ...dto })

    const result = await controller.create(dto)
    expect(result).toEqual({ id: 1, ...dto })
    expect(mockNoticiaService.create).toHaveBeenCalledWith(dto)
  })

  it('should return all noticias', async () => {
    mockNoticiaService.findAll.mockResolvedValue(['noticia1', 'noticia2'])

    const result = await controller.findAll()
    expect(result).toEqual(['noticia1', 'noticia2'])
  })

  it('should return one noticia by id', async () => {
    mockNoticiaService.findOne.mockResolvedValue('noticia')

    const result = await controller.findOne('1')
    expect(result).toEqual('noticia')
    expect(mockNoticiaService.findOne).toHaveBeenCalledWith(1)
  })

  it('should update a noticia', async () => {
    const dto: UpdateNoticiaDto = {
      titulo: 'Novo Título'
    }

    mockNoticiaService.update.mockResolvedValue({ id: 1, ...dto })

    const result = await controller.update('1', dto)
    expect(result).toEqual({ id: 1, ...dto })
    expect(mockNoticiaService.update).toHaveBeenCalledWith(1, dto)
  })

  it('should remove a noticia by id', async () => {
    mockNoticiaService.remove.mockResolvedValue({ deleted: true })

    const result = await controller.remove('1')
    expect(result).toEqual({ deleted: true })
    expect(mockNoticiaService.remove).toHaveBeenCalledWith(1)
  })
})
