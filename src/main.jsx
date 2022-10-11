import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import { PokemonApp } from './PokemonApp'
import {Provider} from 'react-redux';
import { store } from './pokemons/store';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PokemonApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
