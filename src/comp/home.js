import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div className='home'>
            <div className='top_banner'>
                <div className='contant'>
                    <Link to={`/shop/PS5`} className='btn'><button className='btn'>COMPRE AGORA</button></Link>
                </div>
            </div>
            <div className='mid_banner'>
                <div className='contant'>
                    <Link to={`/shop/XBOX`} className='btn'><button className='btn'>COMPRE AGORA</button></Link>
                </div>
            </div>
            <div className='bottom_banner'>
                <div className='contant'>
                    <Link to={`/shop/Nintendo`} className='btn'><button className='btn'>COMPRE AGORA</button></Link>
                </div>
            </div>
        </div>      
        </>
    )
}

export default Home