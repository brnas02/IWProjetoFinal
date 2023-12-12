import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'

const App = () => {
  //Página dos produtos da Loja
  const url = 'https://api.sheety.co/b1ad1de278502cf801c40f536ca9fcc8/restaurantMenu/menuItems';
    const [trendingProducts, setTrendingProducts] = useState(null)

    //A função seguinte é executada quando o valor é colocado em url
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setTrendingProducts(response.data.menuItems);
            })
    }, [url])
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Rout shop={trendingProducts}/>
    <Footer/>
    </BrowserRouter>
    </>
  )
  }

export default App