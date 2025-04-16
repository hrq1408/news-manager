import { useEffect, useState } from 'react'
import { NoticiaCard } from '../components/NoticiaCard'
import { NoticiaResumo } from '../types/NoticiaResumo'
import axios from 'axios'

export const NoticiaLista = () => {
  const [noticias, setNoticias] = useState<NoticiaResumo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/noticias')
        setNoticias(data)
      } catch (error) {
        console.error('Erro ao buscar notícias:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNoticias()
  }, [])

  if (loading) {
    return <div className="text-center mt-10 text-gray-500">Carregando notícias...</div>
  }

  return (
    <div className="container-fluid text-center p-6 text-xl text-gray-800">
      <h1 className="mb-8 mt-5">📰 Estadão - News Manager 📰</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {noticias.map((n) => (
          <NoticiaCard key={n.id} noticia={n} />
        ))}
      </div>
    </div>
  )
}
