// components/NoticiaCard.tsx
import React from 'react'

interface NoticiaCardProps {
  noticia: {
    id: number
    titulo: string
    url: string
    imagem: string
    dataHoraPublicacao: string
  }
}

export const NoticiaCard: React.FC<NoticiaCardProps> = ({ noticia }) => {
  return (
    <a
      href={noticia.url}
      className="block rounded overflow-hidden border border-gray-300 bg-white hover:shadow-lg transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col h-full">
        <img
          src={noticia.imagem}
          alt={noticia.titulo}
          className="w-full h-52 object-cover"
        />
        <div className="p-4 flex flex-col justify-between flex-1">
          <h2 className="text-[17px] font-semibold text-[#0d3b66] leading-tight mb-2 line-clamp-2">
            {noticia.titulo}
          </h2>
          <p className="text-xs text-gray-500">
            {new Date(noticia.dataHoraPublicacao).toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
    </a>
  )
}