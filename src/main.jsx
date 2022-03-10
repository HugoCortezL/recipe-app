import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './styles/global'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App'
import RecipeInfo from './pages/RecipeInfo'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="recipes/:recipeName" element={<RecipeInfo />} />
    </Routes>
    <GlobalStyle/>
  </BrowserRouter>,
  document.getElementById('root')
)
