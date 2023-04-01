import React from 'react'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <header>
        <h1>Blog de Lenguajes de Programacion</h1>
      
      <nav>
        <a href='/'>Inicio</a>
        <a href='/blog'>Blog</a>
        <a href='/contacto'>Contacto</a>
      </nav>
      </header>

    <main>
      <div>
        <h2>Pagina de Inicio</h2>
        <p>Esta es la pagina de Blog</p>
        <ul>
          <li>Post 1</li>
          <li>Post 2</li>
          <li>Post 3</li>
        </ul>
      </div>

      
    </main>

      </div>
  )
}

export default App