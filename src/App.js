import React, { useState } from 'react'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'
import Homeproducts from './comp/home_products'

const App = () => {
  //Página dos produtos da Loja
  const [shop] = useState(Homeproducts)
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Rout shop={shop}/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App