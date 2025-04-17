import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { NoticiaCompleta } from '../NoticiaCompleta'
import { NoticiaDetalhe } from '../../types/NoticiaDetalhe'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

// Mock do componente filho
jest.mock('../../components/NoticiaCardCompleta', () => ({
  NoticiaCardCompleta: ({ noticia }: { noticia: NoticiaDetalhe }) => (
    <div data-testid="noticia-card">Notícia: {noticia.titulo}</div>
  )
}))

describe('NoticiaCompleta', () => {
    beforeEach(() => {
      jest.spyOn(console, 'error').mockImplementation(() => {})
    })
  
    afterEach(() => {
      jest.restoreAllMocks()
    })
  
    it('exibe mensagem de carregamento inicialmente', async () => {
      // ...
    })
  
    it('exibe os dados da notícia ao carregar com sucesso', async () => {
      // ...
    })
  
    it('exibe erro se a notícia não for encontrada', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('Notícia não encontrada'))
  
      render(
        <MemoryRouter initialEntries={['/noticias/999']}>
          <Routes>
            <Route path="/noticias/:id" element={<NoticiaCompleta />} />
          </Routes>
        </MemoryRouter>
      )
  
      await waitFor(() => {
        expect(screen.getByText(/Notícia não encontrada/i)).toBeInTheDocument()
      })
    })
  })
  
