import React from 'react'

import './Escuro.css'
import Copyright from '../Copyright/Copy'

import facebook from '../../../assets/imgs/social/facebook.svg'
import github from '../../../assets/imgs/social/github.svg'
import twitter from '../../../assets/imgs/social/twitter.svg'
import instagram from '../../../assets/imgs/social/instagram.svg'

export default props =>
    <React.Fragment>
        <footer className="footer container-fluid d-flex justify-content-center align-items-center">
            <section className="row">
                <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="tit-footer text-light">MAPA DO SITE</h1>
                    <ul className="row">
                        <li className="col-6"> <a> Home </a> </li>
                        <li className="col-6"> <a> Investir </a> </li>
                        <li className="col-6"> <a> Serviços </a> </li>
                        <li className="col-6"> <a> Conta </a> </li>
                        <li className="col-6"> <a> Termos </a> </li>
                        <li className="col-6"> <a> Contato </a> </li>
                    </ul>
                </div>
                <div className="col-3 offset-1">
                    <h1 className="tit-footer text-light">REDES SOCIAIS</h1>
                    <ul className="row" id="social">
                        <li className="col-6"> <img className="social-icons" src={facebook} alt="" /> </li>
                        <li className="col-6"> <img className="social-icons" src={github} alt="" /> </li>
                        <li className="col-6"> <img className="social-icons" src={instagram} alt="" /> </li>
                        <li className="col-6"> <img className="social-icons" src={twitter} alt="" /> </li>
                    </ul>
                </div>
                <div className="col-3 offset-1 text-center" id="sobre">
                    <h1 className="tit-footer text-light sobre-tit">Sobre</h1>
                    <p className="sobre">
                        A little invest é uma empresa de investimentos criada para facilitar a vida de investidores. Com ela você investe rapidamente o seu dinheiro.
                </p>
                </div>
            </section>
        </footer>
        <Copyright />
    </React.Fragment>