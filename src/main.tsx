import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculadora from './Calculadora.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="bg-slate-800 h-screen flex flex-col items-center justify-center">
      <Calculadora />

    </div>
  </React.StrictMode>,
)
