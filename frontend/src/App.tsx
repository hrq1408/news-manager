import React from 'react';
import { NoticiaLista } from './pages/NoticiaLista'
import { Routes, Route } from 'react-router-dom'
import { NoticiaCompleta } from './pages/NoticiaCompleta'


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NoticiaLista/>} />
      <Route path="/noticia/:id" element={<NoticiaCompleta />} />
    </Routes>
  )
}
