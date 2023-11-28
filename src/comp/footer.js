import React from 'react'
import './footer.css'
import { GiPiggyBank, GiWallet } from "react-icons/gi"
import { FaShippingFast, FaHeadphonesAlt } from "react-icons/fa"

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className='container'>
                <div className='left-box'>
                    <div className='box'>
                        <div className='icon_box'>
                            <GiPiggyBank />
                        </div>
                        <div className='detail'>
                            <h3>Poupança</h3>
                            <p>Produtos aos melhores preços</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon_box'>
                            <FaShippingFast />
                        </div>
                        <div className='detail'>
                            <h3>Entrega Rápida</h3>
                            <p>Entregas entre 2-3 dias</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon_box'>
                            <FaHeadphonesAlt />
                        </div>
                        <div className='detail'>
                            <h3>Apoio ao Cliente</h3>
                            <p>Suporte disponível 24/7</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon_box'>
                            <GiWallet />
                        </div>
                        <div className='detail'>
                            <h3>Devoluções</h3>
                            <p>Prazo de 30 dias para devoluções</p>
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                    <div className='header'>
                        <img src='images/logo1.png' alt=''></img>
                        <p>GAMESTORE, A SUA DIVERSÃO COMEÇA AQUI</p>
                    </div>
                    <div className='bottom'>
                        <div className='box'>
                            <h3>Conta do Utilizador</h3>
                            <ul>
                                <li>Sobre Nós</li>
                                <li>Conta</li>
                                <li>Pagamentos</li>
                                <li>Vendas</li>
                            </ul>
                        </div>
                        <div className='box'>
                            <h3>Produtos</h3>
                            <ul>
                                <li>Entrega</li>
                                <li>Acompanhar Pedido</li>
                                <li>Produtos Novos</li>
                                <li>Produtos Antigos</li>
                            </ul>
                        </div>
                        <div className='box'>
                            <h3>Contacte-nos</h3>
                            <ul>
                                <li>Estrada da Serra, Campus da Quinta do Contador</li>
                                <li>2300-313 Tomar, Portugal</li>
                                <li>945637851</li>
                                <li>gamestore@ipt.pt</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer