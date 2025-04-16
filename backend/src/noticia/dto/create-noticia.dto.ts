import { IsString } from 'class-validator'

export class CreateNoticiaDto {
  @IsString()
  titulo!: string

  @IsString()
  subtitulo!: string

  @IsString()
  url!: string

  @IsString()
  imagem!: string

  @IsString()
  editoria!: string

  @IsString()
  data_hora_publicacao!: string

  @IsString()
  conteudo!: string
}
