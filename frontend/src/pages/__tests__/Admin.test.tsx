import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Admin } from '../Admin'
import { MemoryRouter } from 'react-router-dom'
import axios from 'axios'
import React, { act } from 'react'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Admin component', () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({ data: [] })
  })

  it('renders the Admin form and list title', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Admin />
        </MemoryRouter>
      )
    })

    expect(screen.getByText(/Painel Admin/i)).toBeInTheDocument()
  })

  it('renders input fields', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Admin />
        </MemoryRouter>
      )
    })

    expect(screen.getByRole('textbox', { name: 'titulo' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'subtitulo' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'url' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'imagem' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'editoria' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /data hora publicacao/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'conteudo' })).toBeInTheDocument()
  })

  it('submits form to create a new news item', async () => {
    mockedAxios.post.mockResolvedValue({ data: {} })

    await act(async () => {
      render(
        <MemoryRouter>
          <Admin />
        </MemoryRouter>
      )
    })

    fireEvent.change(screen.getByRole('textbox', { name: 'titulo' }), { target: { value: 'Notícia Teste' } })
    fireEvent.change(screen.getByRole('textbox', { name: 'subtitulo' }), { target: { value: 'Subtitulo Teste' } })
    fireEvent.change(screen.getByRole('textbox', { name: 'url' }), { target: { value: 'https://teste.com' } })
    fireEvent.change(screen.getByRole('textbox', { name: 'imagem' }), { target: { value: 'https://imagem.com/foto.jpg' } })
    fireEvent.change(screen.getByRole('textbox', { name: 'editoria' }), { target: { value: 'Política' } })
    fireEvent.change(screen.getByRole('textbox', { name: /data hora publicacao/i }), { target: { value: '2025-04-11 15:22:00' } })
    fireEvent.change(screen.getByRole('textbox', { name: 'conteudo' }), { target: { value: 'Conteúdo da notícia' } })

    fireEvent.click(screen.getByText(/cadastrar/i))

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalled()
    })
  })
})
