import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Noticia {
  id?: number
  titulo: string
  subtitulo: string
  url: string
  imagem: string
  editoria: string
  data_hora_publicacao: string
  conteudo: string
}

const API_BASE = 'http://localhost:3001/noticias'

export const Admin: React.FC = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([])
  const [form, setForm] = useState<Noticia>({
    titulo: '',
    subtitulo: '',
    url: '',
    imagem: '',
    editoria: '',
    data_hora_publicacao: '',
    conteudo: ''
  })
  const [editId, setEditId] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const loadNoticias = async () => {
    try {
      const { data } = await axios.get(API_BASE)
      setNoticias(data)
    } catch (err) {
      console.error('Erro ao carregar notícias', err)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      setLoading(true)

      const payload = {
        ...form,
        data_hora_publicacao: new Date(form.data_hora_publicacao).toISOString()
      }

      if (editId !== null) {
        await axios.put(`${API_BASE}/${editId}`, payload)
      } else {
        await axios.post(API_BASE, payload)
      }

      setForm({
        titulo: '',
        subtitulo: '',
        url: '',
        imagem: '',
        editoria: '',
        data_hora_publicacao: '',
        conteudo: ''
      })
      setEditId(null)
      await loadNoticias()
    } catch (err) {
      console.error('Erro ao salvar notícia', err)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (noticia: Noticia) => {
    setForm(noticia)
    setEditId(noticia.id || null)
  }

  const handleDelete = async (id?: number) => {
    if (!id) return
    try {
      await axios.delete(`${API_BASE}/${id}`)
      loadNoticias()
    } catch (err) {
      console.error('Erro ao excluir notícia', err)
    }
  }

  useEffect(() => {
    loadNoticias()
  }, [])

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Painel Admin - Gerenciar Notícias</h1>

      <div className="grid gap-4 mb-8">
        {Object.entries(form).map(([key, value]) => (
          <div key={key}>
            <label className="block text-sm font-semibold mb-1">{key.replaceAll('_', ' ')}</label>
            {key === 'conteudo' ? (
              <textarea
                className="w-full border p-2 rounded"
                name={key}
                value={value}
                rows={6}
                onChange={handleChange}
              />
            ) : (
              <input
                className="w-full border p-2 rounded"
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
              />
            )}
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {editId !== null ? 'Atualizar' : 'Cadastrar'}
        </button>
      </div>

      <div className="space-y-4">
        {noticias.map((n) => (
          <div key={n.id} className="border p-4 rounded shadow-sm">
            <h2 className="font-bold text-lg mb-1">{n.titulo}</h2>
            <p className="text-sm text-gray-500">{n.subtitulo}</p>
            <div className="flex gap-4 mt-2">
              <button
                onClick={() => handleEdit(n)}
                className="text-blue-600 hover:underline"
              >Editar</button>
              <button
                onClick={() => handleDelete(n.id)}
                className="text-red-600 hover:underline"
              >Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
