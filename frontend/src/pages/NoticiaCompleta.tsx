import { useState, useEffect } from 'react'
import { NoticiaCardCompleta } from '../components/NoticiaCardCompleta'
import { NoticiaDetalhe } from '../types/NoticiaDetalhe'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export const NoticiaCompleta: React.FC = () => {
   const { id } = useParams()
   const [noticia, setNoticia] = useState<NoticiaDetalhe | null>(null)
   const [loading, setLoading] = useState(true)
 
   useEffect(() => {
     if (id) {
       axios
         .get(`http://localhost:3001/noticias/${id}`)
         .then((response) => setNoticia(response.data))
         .catch((error) => {
           console.error('Erro ao carregar a notícia:', error)
           setNoticia(null)
         })
         .finally(() => setLoading(false))
     }
   }, [id])
 
   if (loading) return <p className="text-center mt-10 text-gray-500">Carregando notícia...</p>
   if (!noticia) return <p className="text-center mt-10 text-red-500">Notícia não encontrada.</p>
 
   return (
      <div className="container-fluid text-center p-6 text-xl text-gray-800">
      <div className="text-left mb-4">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:underline hover:text-blue-800"
        >
          <ArrowLeft className="mr-2" />
          Voltar para a lista
        </Link>
      </div>
  
      <h1 className="mb-8 mt-5">📰 Estadão - Matéria {id} 📰</h1>
  
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <NoticiaCardCompleta noticia={noticia} />
      </div>
    </div>
   )
 }