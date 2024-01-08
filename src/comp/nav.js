import React from 'react'
import { MdLocalShipping } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdLogIn } from 'react-icons/io'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { FaUserAlt } from 'react-icons/fa'
import { useAuth0 } from "@auth0/auth0-react"
import {Link} from 'react-router-dom'
import './nav.css'

const Nav = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <>
        <div className='header'>
            <div className='top_header'>
                <div className='icon'>
                    <MdLocalShipping />
                </div>
                <div className='info'>
                    <p>Envio grátis para compras superiores a 100€</p>
                </div>
            </div>
            <div className='mid_header'>
                <div className='logo'>
                    <a href="/">
                    <img src='images/logo.png' alt='logo'></img>
                    </a>
                </div>
                <div className='search_box'>
                    <input type='text' value='' placeholder='search'></input>
                    <button><AiOutlineSearch /></button>
                </div>
                {
                    isAuthenticated ?
                    // Se o user aceder à sua conta, o botão de Sair irá aparecer
                    <div className='user'>
                        <div className='icon'>
                            <RiLogoutCircleLine />
                        </div>
                        <div className='btn'>
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sair</button>
                        </div>
                    </div>
                :
                // Se o user não estiver conectado com as sua conta, aparece o botão de Entrar
                <div className='user'>
                    <div className='icon'>
                        <IoMdLogIn />
                    </div>
                    <div className='btn'>
                        <button onClick={() => loginWithRedirect()}>Entrar</button>
                    </div>
                </div>
                }
            </div>
            <div className='last_header'>
                <div className='user_profile'>
                    {
                        // O perfil do user irá aparecer aqui
                        isAuthenticated ? 
                        <>
                        <div className='icon'>
                            <FaUserAlt />
                        </div>
                        <div className='info'>
                            <h2>{user.name}</h2>
                        </div>
                        </>
                        :
                        <>
                        </>
                    }
                </div>
                <div className='nav'>
                    <ul>
                        <li><Link to='/Shop' className='link'>LOJA</Link></li>
                        <li><Link to='/Shop' className='link'>PLAYSTATION</Link></li>
                        <li><Link to='/Shop' className='link'>XBOX</Link></li>
                        <li><Link to='/Shop' className='link'>NINTENDO</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Nav