import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'

const App = () => {
  //Página dos produtos da Loja
  const url = 'https://api.sheety.co/680c2cd96be26e31c9062b1006efe397/restaurantMenu/menuItems';
    
  const [shop, setTrendingProducts] = useState(null)

  /*const Filter = (x) =>
  {
    const filter = url.filter((url) =>
    {
      return url.categoria === x
    })
    setShop(filter)
  }*/

  //A função seguinte é executada quando o valor é colocado em url
  useEffect(() => {
      axios.get(url)
          .then(response => {
              setTrendingProducts(response.data.menuItems);
          }).catch(error => console.log(error))
  }, [url])
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Rout shop={shop} />
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App