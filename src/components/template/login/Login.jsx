import React from 'react'

import './Login.css'
import helpDesk from '../../assets/imgs/page/help-desk.svg'

export default class Login extends React.Component{
    render(){
        return(
            <section className="container section-content">
                <div className="row">
                    <div className="col-5 d-flex flex-column justify-content-center align-items-center">
                        <h1>Crie a sua conta</h1>
                        <form className="d-flex flex-column justify-content-center align-items-center w-75">
                            <label className="align-self-start ml-4"> Nome </label>
                            <input className="inputs" type="text" placeholder="Digite seu nome"/>
                            <label className="align-self-start ml-4"> Senha </label>
                            <input className="inputs" type="password" placeholder="Digite sua senha"/>
                            <button className="btn-contato btn">Inicar cadastro</button>
                        </form>
                    </div>
                    <div className="col-5 offset-2">
                        <img src={helpDesk} alt="Simbolo de mulher para ajuda" className="helpDesk"/>
                    </div>
                </div>
            </section>
        )
    }
}