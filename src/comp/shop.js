import React from 'react'
import './shop.css'
import { FaCartShopping } from "react-icons/fa6"

const Shop = ({shop, Filter}) => {
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
                                <li onClick={() => Filter ("Playstation")}>Playstation</li>
                                <li onClick={() => Filter ("Jogos Playstation")}>Jogos Playstation</li>
                                <li onClick={() => Filter ("Xbox")}>Xbox</li>
                                <li onClick={() => Filter ("Jogos Xbox")}>Jogos Xbox</li>
                                <li onClick={() => Filter ("Nintendo")}>Nintendo</li>
                                <li onClick={() => Filter ("Jogos Nintendo")}>Jogos Nintendo</li>
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