import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
//import Homeproducts from './home_products'
import { FaCartShopping } from "react-icons/fa6"

const Home = () => {
    const url = 'https://api.sheety.co/b1ad1de278502cf801c40f536ca9fcc8/restaurantMenu/menuItems';
    const [trendingProducts, setTrendingProducts] = useState(null)

    //A função seguinte é executada quando o valor é colocado em url 
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setTrendingProducts(response.data.menuItems);
            })
    }, [url])

    const allTrendingProducts = () => {
        setTrendingProducts(trendingProducts)
    }
    return (
        <>
        <div className='home'>
            <div className='top_banner'>
                <div className='contant'>
                    <Link to='/shop' className='btn'><button className='btn'>COMPRE AGORA</button></Link>
                </div>
            </div>
            <div className='mid_banner'>
                <div className='contant'>
                    <Link to='/shop' className='btn'><button className='btn'>COMPRE AGORA</button></Link>
                </div>
            </div>
            <div className='bottom_banner'>
                <div className='contant'>
                    <Link to='/shop' className='btn'><button className='btn'>COMPRE AGORA</button></Link>
                </div>
            </div>
            <div className='trending'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='header'>
                            <div className='heading'>
                                <h2 onClick={() => allTrendingProducts ()}>Produtos</h2>
                            </div>
                        </div>
                        <div className='products'>
                            <div className='container'>
                                {
                                    //Se o trendingProducts não for nulo, fazer a seguinte função, caso seja, não executa nada
                                    trendingProducts?trendingProducts.map((curElm) =>
                                    {
                                        return(
                                            <>
                                            <div className='box'>
                                                <div className='img_box'>
                                                    <img src={curElm.imagem} alt=''></img>
                                                </div>
                                                <div className='info'>
                                                    <h3>{curElm.nome}</h3>
                                                    <p>{curElm.preco}€</p>
                                                    <button className='btn'><FaCartShopping /> ADICIONAR</button>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    }):null
                                }
                            </div>
                            <button>Mostrar Mais</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
        </>
    )
}

export default Home