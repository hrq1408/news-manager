import React from 'react';
import { NoticiaLista } from './pages/NoticiaLista'
import { Routes, Route } from 'react-router-dom'
import { NoticiaCompleta } from './pages/NoticiaCompleta'
import { Admin } from './pages/Admin';


export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Admin/>} />
      <Route path="/" element={<NoticiaLista/>} />
      <Route path="/noticia/:id" element={<NoticiaCompleta />} />
    </Routes>
  )
}
