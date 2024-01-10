import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './shop.css'
import { FaCartShopping } from 'react-icons/fa6'
import { AiOutlineSearch } from 'react-icons/ai'

const Shop = () => {

    //Página dos produtos da Loja (URL da API)
    const url = 'https://api.sheety.co/680c2cd96be26e31c9062b1006efe397/restaurantMenu/menuItems';
    
    //Estado para armazenar os produtos da loja
    const [shop, setProducts] = useState(null);

    //Estados para filtrar os produtos por nome e categoria
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');

    //Estado para indicar se a pesquisa está sendo feita por categoria
    const [catSearch, setCatSearch] = useState(false);

    //Obtém o parâmetro 'filter' do URL usando o React Router
    const { filter } = useParams();

    //Efeito para configurar o estado quando o URL muda
    useEffect(() => {
        setCatSearch(false);
        setCategoria(filter);
    }, [url]);

    //Efeito para ir buscar os produtos quando a categoria muda
    useEffect(() => {
        getProducts();
    }, [categoria]);

    //Função para obter produtos da API
    const getProducts = () => {
        axios.get(url)
            .then(response => {
                //Filtra os produtos com base na categoria e no nome
                catSearch?setProducts(
                    response.data.menuItems.filter(items =>
                        (categoria ? items.categoria === categoria : true) &&
                        items.nome.toLowerCase().includes(nome.toLowerCase())
                    )
                )
                :setProducts(
                    response.data.menuItems.filter(items =>
                        items.categoria.includes(categoria ? categoria : '') &&
                        items.nome.toLowerCase().includes(nome.toLowerCase())
                    )
                );
            })
    };

    //Manipula a mudança no input de pesquisa por nome
    const handleChange = event => {
        setNome(event.target.value);
    };

    //Manipula o clique no botão de pesquisa
    const procurarClick = event => {
        if (event) {
            event.preventDefault();
        }
    
        getProducts();
    };

    //Manipula o clique nos filtros de categoria
    const filterClick = async (txt) => {
        setCatSearch(true);
        setCategoria(txt);
    };

    //Manipula a tecla Enter para realizar a pesquisa
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            procurarClick(event);
        }
    };

    return (
        <>
        <div className='search_box'>
            <input type='text' placeholder='search' value={nome} onChange={handleChange} onKeyDown={handleKeyDown}></input>
            <button onClick={procurarClick}><AiOutlineSearch /></button>
        </div>
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
                                <li onClick={() => filterClick ("")}>Todos</li>
                                <li onClick={() => filterClick ("PS5")}>Playstation</li>
                                <li onClick={() => filterClick ("jPS5")}>Jogos Playstation</li>
                                <li onClick={() => filterClick ("XBOX")}>Xbox</li>
                                <li onClick={() => filterClick ("jXBOX")}>Jogos Xbox</li>
                                <li onClick={() => filterClick ("Nintendo")}>Nintendo</li>
                                <li onClick={() => filterClick ("jNintendo")}>Jogos Nintendo</li>
                            </ul>
                        </div>
                    </div>
                    <div className='banner'>
                        <div className='img_box'>
                            <img src='/images/CPS5.jpg' alt=''></img>
                            <img src='/images/CXBOX.jpg' alt=''></img>
                            <img src='/images/CN.png' alt=''></img>
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
                                        <div className='box' key={curElm.id}>
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