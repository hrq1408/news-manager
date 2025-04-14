// components/NoticiaLista.tsx
import React from 'react'
import { NoticiaCard } from './NoticiaCard'
import { NoticiaResumo } from '../types/NoticiaResumo'

interface Props {
  noticias: NoticiaResumo[]
}

export const NoticiaLista: React.FC<Props> = ({ noticias }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {noticias.map((n) => (
        <NoticiaCard key={n.id} noticia={n} />
      ))}
    </div>
  )
}
