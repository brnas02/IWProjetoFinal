import React, { useState } from 'react'
import './shop.css'
import { FaCartShopping } from "react-icons/fa6"

const Shop = ({shop, searchQuery }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    
    const handleCategoryClick = (categoria) => {
        setSelectedCategory(categoria);
      };
    
    // Ajuste a lógica de filtragem
    
    const filteredProducts = shop.filter((product) => {
        const categoryMatch =
            !selectedCategory || product.categoria === selectedCategory;

        const nameMatch =
            !searchQuery ||
            product.nome.toLowerCase().includes(searchQuery.toLowerCase());

        return categoryMatch && nameMatch;
    });

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
                                <li className={selectedCategory === 'PS5' ? 'selected' : ''} onClick={() => handleCategoryClick('PS5')}>Playstation</li>
                                <li className={selectedCategory === 'jPS5' ? 'selected' : ''} onClick={() => handleCategoryClick('jPS5')}>Jogos Playstation</li>
                                <li className={selectedCategory === 'XBOX' ? 'selected' : ''} onClick={() => handleCategoryClick('XBOX')}>Xbox</li>
                                <li className={selectedCategory === 'jXBOX' ? 'selected' : ''} onClick={() => handleCategoryClick('jXBOX')}>Jogos Xbox</li>
                                <li className={selectedCategory === 'Nintendo' ? 'selected' : ''} onClick={() => handleCategoryClick('Nintendo')}>Nintendo</li>
                                <li className={selectedCategory === 'jNintendo' ? 'selected' : ''} onClick={() => handleCategoryClick('jNintendo')}>Jogos Nintendo</li>
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
                            {filteredProducts.map((curElm) => (
                                <div className='box' key={curElm.id}>
                                    <div className='img_box'>
                                        <img src={curElm.imagem} alt='' />
                                    </div>
                                    <div className='detail'>
                                        <h3>{curElm.nome}</h3>
                                        <p>{curElm.preco} €</p>
                                    <button className='btn'>
                                        <FaCartShopping /> ADICIONAR </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Shop