// components/NoticiaCard.tsx

import React from 'react'
import { Bookmark, MessageSquare, Share } from 'lucide-react'
import { NoticiaResumo } from '../types/NoticiaResumo'
import { Link } from 'react-router-dom'

interface NoticiaCardProps {
  noticia: NoticiaResumo
}

export const NoticiaCard: React.FC<NoticiaCardProps> = ({ noticia }) => {
  return (
    <Link
      to={`/noticia/${noticia.id}`}
      className="block rounded-[.7rem] overflow-hidden border border-gray-300 bg-white hover:shadow-lg transition duration-300"
    >
      <div className="flex flex-col h-full text-left">
        <img
          src={noticia.imagem}
          alt={noticia.titulo}
          className="w-full h-[14rem] object-cover object-top" 
        />

        <div className="p-4 pt-3 flex flex-col justify-between flex-1">
          <span className="text-[.75rem] text-blue-700 font-semibold uppercase">
            {noticia.editoria}
          </span>

          <h2 className="text-[1.05rem] font-serif font-bold text-[#222222] leading-snug mb-1 line-clamp-2">
            {noticia.titulo}
          </h2>

          <p className="text-[.85rem] text-gray-500 mb-4">
            Publicações abordaram patamar de óbitos por covid e efeitos do isolamento
          </p>

          <div className="flex justify-end items-center text-gray-400">
            
            <div className="flex gap-4 text-gray-500">
              <Share className="w-4 h-4 hover:text-blue-600 transition" />
              <MessageSquare className="w-4 h-4 hover:text-blue-600 transition" />
              <Bookmark className="w-4 h-4 hover:text-blue-600 transition" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
