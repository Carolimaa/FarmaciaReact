import React from 'react';
import './App.css';

import Navbar from './components/navBar/navBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategorias from './components/categories/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categories/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categories/deletarCategorias/DeletarCategoria';


function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;