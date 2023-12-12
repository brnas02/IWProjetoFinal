import axios from 'axios'
import React, { useEffect } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
//import Homeproducts from './home_products'

const Home = () => {
    const url = 'https://api.sheety.co/b1ad1de278502cf801c40f536ca9fcc8/restaurantMenu/menuItems';

    //A função seguinte é executada quando o valor é colocado em url 
    useEffect(() => {
        axios.get(url)
            
    }, [url])

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
        </div>      
        </>
    )
}

export default Home