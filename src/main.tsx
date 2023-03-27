import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'

// Object Model Document

// Recebe o elemento raiz da página HTML, dentro da div com id = root
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
