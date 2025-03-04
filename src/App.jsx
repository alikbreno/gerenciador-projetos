import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FornecedorList from './pages/Fornecedor/FornecedorList'
import NavBar from './components/NavBar'
import FornecedorForm from './pages/Fornecedor/FornecedorForm'
import ProdutoList from './pages/Produto/ProdutoList'
import ProdutoForm from './pages/Produto/ProdutoForm'
import Inicial from './pages/Inicial'
import ClienteList from './pages/Cliente/ClienteList'
import ClienteForm from './pages/Cliente/ClienteForm'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <div className='container'>
      <Routes>
          <Route path='/' element={<Inicial />} />
          <Route path='/listar-fornecedores' element={<FornecedorList/>} />
          <Route path='/add-fornecedores' element={<FornecedorForm />} />
          <Route path='/edit-fornecedores/:id' element={<FornecedorForm />} />
          <Route path='/listar-produtos' element={<ProdutoList />} />
          <Route path='/add-produtos' element={<ProdutoForm />} />
          <Route path='/edit-produtos/:id' element={<ProdutoForm />} />
          <Route path='/listar-clientes' element={<ClienteList />} />
          <Route path='/add-clientes' element={<ClienteForm />} />
          <Route path='/edit-clientes/:id' element={<ClienteForm />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
