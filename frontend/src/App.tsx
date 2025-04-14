import React from 'react';
import { NoticiaLista } from './components/NoticiaLista'
import { NoticiaResumo } from './types/NoticiaResumo'

const noticiasMock: NoticiaResumo[] = [
  {
    id: 1,
    titulo: "Reportagens do 'Estadão' sobre efeitos da pandemia em crianças são premiadas",
    url: 'https://www.estadao.com.br',
    imagem: 'https://via.placeholder.com/400x200',
    dataHoraPublicacao: '2025-04-13T12:00:00Z',
  },
  // outras notícias
]

function App() {
  return (
    <div className="p-6 text-xl text-gray-800">
      <h1>📰 Sistema de Notícias</h1>
      <p>Frontend em React + TypeScript rodando com Vite!</p>
      <NoticiaLista noticias={noticiasMock} />
    </div>
  )
}

export default App;
