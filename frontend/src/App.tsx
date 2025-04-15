import React from 'react';
import { NoticiaLista } from './components/NoticiaLista'
import { NoticiaResumo } from './types/NoticiaResumo'

const noticiasMock: NoticiaResumo[] = [
  {
    "id": 1,
    "editoria": "Economia",
    "url": "https://www.estadao.com.br/economia/china-nova-retaliacao-tarifas-estados-unidos/",
    "titulo": "China retalia os EUA, eleva tarifas para 125%, mas diz que disputa se tornará ‘piada’ histórica",
    "subtitulo": "China diz que guerra se tornou ‘um jogo de números, que não tem nenhum significado econômico prático’, e sinalizou que não fará novos aumentos, mesmo que os Estados Unidos voltem a subir as taxas",
    "imagem": "https://www.estadao.com.br/resizer/v2/LXVZ7DQIOZEEHDX5NOAYSR5PCA.jpg?quality=80&auth=f3286120503bf42b9c65bf076baa9ff9448f1ddf9864109ca5d59b4276df205d&width=1200",
    "imagem_thumb": "https://www.estadao.com.br/resizer/v2/LXVZ7DQIOZEEHDX5NOAYSR5PCA.jpg?quality=80&auth=f3286120503bf42b9c65bf076baa9ff9448f1ddf9864109ca5d59b4276df205d&width=380",
 },
 {
  "id": 2,
  "editoria": "Economia",
  "url": "https://www.estadao.com.br/economia/china-nova-retaliacao-tarifas-estados-unidos/",
  "titulo": "China retalia os EUA, eleva tarifas para 125%, mas diz que disputa se tornará ‘piada’ histórica",
  "subtitulo": "China diz que guerra se tornou ‘um jogo de números, que não tem nenhum significado econômico prático’, e sinalizou que não fará novos aumentos, mesmo que os Estados Unidos voltem a subir as taxas",
  "imagem": "https://www.estadao.com.br/resizer/v2/LXVZ7DQIOZEEHDX5NOAYSR5PCA.jpg?quality=80&auth=f3286120503bf42b9c65bf076baa9ff9448f1ddf9864109ca5d59b4276df205d&width=1200",
  "imagem_thumb": "https://www.estadao.com.br/resizer/v2/LXVZ7DQIOZEEHDX5NOAYSR5PCA.jpg?quality=80&auth=f3286120503bf42b9c65bf076baa9ff9448f1ddf9864109ca5d59b4276df205d&width=380",
},
  {
    id: 3,
    titulo: "Reportagens do 'Estadão' sobre efeitos da pandemia em crianças são premiadas",
    url: 'https://www.estadao.com.br',
    imagem: 'https://dummyjson.com/image/400x200',
    dataHoraPublicacao: '2025-04-13T12:00:00Z',
  },
  {
    id: 4,
    titulo: "Reportagens do 'Estadão' sobre efeitos da pandemia em crianças são premiadas",
    url: 'https://www.estadao.com.br',
    imagem: 'https://dummyjson.com/image/400x200',
    dataHoraPublicacao: '2025-04-13T12:00:00Z',
  },
  {
    id: 5,
    titulo: "Reportagens do 'Estadão' sobre efeitos da pandemia em crianças são premiadas",
    url: 'https://www.estadao.com.br',
    imagem: 'https://dummyjson.com/image/400x200',
    dataHoraPublicacao: '2025-04-13T12:00:00Z',
  },
]

function App() {
  return (
    <div className="container-fluid text-center p-6 text-xl text-gray-800">
      <h1 className="mb-8 mt-5">📰 Estadão - News Manager  📰</h1>
      <NoticiaLista noticias={noticiasMock} />
    </div>
  )
}

export default App;
