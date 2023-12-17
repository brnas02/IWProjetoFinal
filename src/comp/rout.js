import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './home'
import Shop from './shop'

const Rout = ({shop,Filter}) => {
    return (
        <>
        <Routes>
            <Route path= '/' element={<Home />}/>
            <Route path= 'Shop' element={<Shop shop={shop} Filter={Filter} />}/>
        </Routes>
        </>
    )
}

export default Rout