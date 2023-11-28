import React, { useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Homeproducts from './home_products'
import { IoEyeSharp, IoHeart } from "react-icons/io5"
import { FaCartShopping } from "react-icons/fa6"

const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState(Homeproducts)

    const filtercate =(x) => {
        const filterproduct = Homeproducts.filter((curElm) => {
            return curElm.type === x
        })
        setTrendingProducts(filterproduct)
    }
    const allTrendingProducts = () => {
        setTrendingProducts(Homeproducts)
    }
    return (
        <>
        <div className='home'>
            <div className='top_banner'>
                <div className='contant'>
                    <Link to='/shop' className='btn'><button className='btn'>COMPRE AGORA</button></Link>
                </div>
            </div>
        </div>
        <div className='home'>
            <div className='mid_banner'>
                <div className='contant'>
                    <Link to='/shop' className='btn'><button className='btn'>COMPRE AGORA</button></Link>
                </div>
            </div>
        </div>
        <div className='home'>
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
                                <h2 onClick={() => allTrendingProducts ()}>Tendências</h2>
                            </div>
                            <div className='cate'>
                                <h3 onClick={() => filtercate('new')}>Novo</h3>
                                <h3 onClick={() => filtercate('top')}>Mais Vendido</h3>
                            </div>
                        </div>
                        <div className='products'>
                            <div className='container'>
                                {
                                    trendingProducts.map((curElm) =>
                                    {
                                        return(
                                            <>
                                            <div className='box'>
                                                <div className='img_box'>
                                                    <img src={curElm.img} alt=''></img>
                                                    <div className='icon'>
                                                        <div className='icon_box'>
                                                            <IoEyeSharp />    
                                                        </div>
                                                        <div className='icon_box'>
                                                            <IoHeart /> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='info'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p>{curElm.price}€</p>
                                                    <button className='btn'><FaCartShopping /> ADICIONAR</button>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    })
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