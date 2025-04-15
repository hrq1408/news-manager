// components/NoticiaCard.tsx
import React from 'react'
import { Bookmark, MessageSquare, Share } from 'lucide-react'
import { NoticiaResumo } from '../types/NoticiaResumo'
interface NoticiaCardProps {
  noticia: NoticiaResumo
}

export const NoticiaCard: React.FC<NoticiaCardProps> = ({ noticia }) => {
  return (
    <a
      href={noticia.url}
      className="block rounded-[.7rem] overflow-hidden border border-gray-300 bg-white hover:shadow-lg transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col h-full text-left">
        <img
          src={noticia.imagem_thumb}
          alt={noticia.titulo}
          className="w-full h-[14rem] object-cover"
        />

        <div className="p-4 pt-2 flex flex-col justify-between flex-1">
          <span className="text-[.70rem] text-blue-700 font-semibold uppercase">
            {noticia.editoria}
          </span>

          <h2 className="text-[1.05rem] font-bold text-[#0d3b66] font-serif leading-snug mb-1 line-clamp-3">
            {noticia.titulo}
          </h2>

          <p className="text-[.85rem] text-gray-500 mt-1 mb-4 line-clamp-2 leading-[1.1rem]">
          {noticia.subtitulo}
          </p>

          <hr className='mb-3'/>

          <div className="flex justify-end items-center text-gray-400">
            {/* <span className="text-xs">
              {new Date(noticia.dataHoraPublicacao).toLocaleDateString('pt-BR')}
            </span> */}

            <div className="flex gap-3 text-gray-400">
                <Share className="w-5 h-6 hover:text-blue-600 transition" />
                <MessageSquare className="w-5 h-6 hover:text-blue-600 transition" />
                <Bookmark className="w-5 h-6 hover:text-blue-600 transition" />
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
