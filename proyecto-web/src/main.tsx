import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Layout from './layout/Layout.tsx'
import Dashboard from './components/dashboard/Dashboard.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/iniciar-sesion' element={<Layout><App /></Layout>} />
        <Route path='/dashboard' element={<Layout><Dashboard/></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
