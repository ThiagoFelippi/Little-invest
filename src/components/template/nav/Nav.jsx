import React from 'react'

import './Nav.css'
import logo from '../../assets/imgs/page/logo.svg'

export default class Nav extends React.Component{
    render(){
        return(
            <nav className="nav navbar-collapse nav-personalizada">
                <img src={logo} alt="" className="logo"/>
                <ul className="ul-personalizada">
                    <li className="nav-item"> <a className="nav-link item-personalizado"> Investimento </a>  </li>
                    <li className="nav-item"> <a className="nav-link item-personalizado"> Serviços </a>  </li>
                    <li className="nav-item"> <a className="nav-link item-personalizado"> Contato </a>  </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn-personalizado p-2">Cadastre-se</button>
                    </li>
                </ul>
            </nav>
        )
    }
} 