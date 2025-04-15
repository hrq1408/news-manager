// components/NoticiaCardCompleta.tsx

import React from 'react'
import { Bookmark, MessageSquare, Share, Clock } from 'lucide-react'
import { NoticiaDetalhe } from '../types/NoticiaDetalhe'

interface NoticiaCardCompletaProps {
  noticia: NoticiaDetalhe
}

export const NoticiaCardCompleta: React.FC<NoticiaCardCompletaProps> = ({ noticia }) => {
  return (
    <article className="max-w-3xl mx-auto bg-white p-4 text-left">
      <div className="flex flex-col">
        <span className="text-sm text-blue-700 font-semibold uppercase mb-2">
          {noticia.editoria}
        </span>

        <h1 className="text-2xl font-bold font-serif text-[#222222] mb-2 leading-snug">
          {noticia.titulo}
        </h1>

        <p className="text-base text-gray-500 mb-4">
          {noticia.subtitulo}
        </p>

        <div className="text-sm text-gray-700 mb-2">
          <div className="font-semibold">Redação, O Estado de S. Paulo</div>
          <div className="text-gray-500">
            {new Date(noticia.data_hora_publicacao).toLocaleDateString('pt-BR', {
              day: '2-digit', month: 'long', year: 'numeric'
            })} | {new Date(noticia.data_hora_publicacao).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          </div>
          <div className="flex items-center gap-1 text-gray-500 mt-1">
            <Clock className="w-4 h-4" />
            <span>5 min de leitura</span>
          </div>
        </div>

        <div className="text-base text-gray-800 leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: noticia.conteudo }} />
        </div>

        <div className="flex justify-end gap-4 text-gray-500 mt-6">
          <Share className="w-5 h-5 hover:text-blue-600 transition cursor-pointer" />
          <MessageSquare className="w-5 h-5 hover:text-blue-600 transition cursor-pointer" />
          <Bookmark className="w-5 h-5 hover:text-blue-600 transition cursor-pointer" />
        </div>
      </div>
    </article>
  )
}
