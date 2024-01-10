import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './home'
import Shop from './shop'

const Rout = () => {
    return (
        <>
        <Routes>
            <Route path= '/' element={<Home />}/>
            <Route path= 'shop' element={<Shop />}/>
            <Route path= 'shop/:filter' element={<Shop />}/>
        </Routes>
        </>
    )
}

export default Rout