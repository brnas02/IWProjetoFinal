import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'

const App = () => {
  //Página dos produtos da Loja
  const url = 'https://api.sheety.co/680c2cd96be26e31c9062b1006efe397/restaurantMenu/menuItems';
    const [trendingProducts, setTrendingProducts] = useState(null)
    const [searchQuery, setSearchQuery] = useState("");

    //A função seguinte é executada quando o valor é colocado em url
    useEffect(() => {
        axios.get(url).then((response) => {
                setTrendingProducts(response.data.menuItems);
            })
    }, [url])
    
    const handleSearch = (query) => {
      setSearchQuery(query);
    };

  return (
    <>
    <BrowserRouter>
    <Nav shop={trendingProducts} onSearch={handleSearch}/>
    <Rout shop={trendingProducts} searchQuery={searchQuery}/>
    <Footer/>
    </BrowserRouter>
    </>
  )
  }

export default App