import React from 'react'
import './shop.css'
import { IoEyeSharp, IoHeart } from "react-icons/io5"
import { FaCartShopping } from "react-icons/fa6"

const Shop = ({shop}) => {
    return (
        <>
        <div className='shop'>
            <h2>LOJA</h2>
            <div className='container'>
                <div className='left_box'>
                    <div className='category'>
                        <div className='header'>
                            <h3>Categorias</h3>
                        </div>
                        <div className='box'>
                            <ul>
                                <li>Playstation</li>
                                <li>Jogos Playstation</li>
                                <li>Xbox</li>
                                <li>Jogos Xbox</li>
                                <li>Nintendo</li>
                                <li>Jogos Nintendo</li>
                            </ul>
                        </div>
                    </div>
                    <div className='banner'>
                        <div className='img_box'>
                            <img src='images/CPS5.jpg' alt=''></img>
                            <img src='images/CXBOX.jpg' alt=''></img>
                            <img src='images/CN.png' alt=''></img>
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                    <div className='products_box'>
                        <h2>Produtos</h2>
                        <div className='products_container'>
                            {
                                shop?shop.map((curElm) =>
                                {
                                    return(
                                        <>
                                        <div className='box'>
                                            <div className='img_box'>
                                                <img src={curElm.imagem} alt=''></img>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.nome}</h3>
                                                <p>{curElm.preco} €</p>
                                                <button className='btn'><FaCartShopping /> ADICIONAR</button>
                                            </div>
                                        </div>
                                        </>
                                    )
                                }):null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Shop