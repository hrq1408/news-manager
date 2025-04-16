import axios from 'axios'
import { NoticiaResumo } from '../types/NoticiaResumo'

const API_URL = 'http://localhost:3001/noticias'

export const getNoticias = async (): Promise<NoticiaResumo[]> => {
  const response = await axios.get(API_URL)
  return response.data
}

export const getNoticia = async (id: number): Promise<NoticiaResumo> => {
  const response = await axios.get(`${API_URL}/${id}`)
  return response.data
}

export const createNoticia = async (data: NoticiaResumo): Promise<NoticiaResumo> => {
  const response = await axios.post(API_URL, data)
  return response.data
}

export const updateNoticia = async (id: number, data: NoticiaResumo): Promise<NoticiaResumo> => {
  const response = await axios.put(`${API_URL}/${id}`, data)
  return response.data
}

export const deleteNoticia = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`)
}
