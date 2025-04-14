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
      className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={noticia.imagem} alt={noticia.titulo} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-xs text-blue-600 font-semibold uppercase mb-1">Notícia</p>
        <h2 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
          {noticia.titulo}
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          {new Date(noticia.dataHoraPublicacao).toLocaleDateString('pt-BR')}
        </p>
      </div>
    </a>
  )
}
