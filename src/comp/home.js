import axios from 'axios'
import React, { useEffect } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
//import Homeproducts from './home_products'

const Home = () => {
    const url = 'https://api.sheety.co/680c2cd96be26e31c9062b1006efe397/restaurantMenu/menuItems';

    //A função seguinte é executada quando o valor é colocado em url 
    useEffect(() => {
        axios.get(url)
            
    }, [url])

    return (
        <>
        <div className='home'>
            <div className='top_banner'>
                <div className='contant'>
                    <Link to='/Shop' className='btn'><button className='btn'>COMPRE AGORA</button></Link>
                </div>
            </div>
            <div className='mid_banner'>
                <div className='contant'>
                    <Link to='/Shop' className='btn'><button className='btn'>COMPRE AGORA</button></Link>
                </div>
            </div>
            <div className='bottom_banner'>
                <div className='contant'>
                    <Link to='/Shop' className='btn'><button className='btn'>COMPRE AGORA</button></Link>
                </div>
            </div>
        </div>      
        </>
    )
}

export default Home