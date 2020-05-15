import React from 'react'

import './Intro.css'

import notreDame from '../../assets/imgs/page/notre-dame.svg'

export default class Intro extends React.Component{
    render(){
        return(
            <main className="container w-100 ">
                <section className="row main">
                    <div className="col-4 offset-1 d-flex flex-column justify-content-center align-items-center">
                        <h2 className="tit-h2 text-center">Planeje o seu futuro sem perder tempo no presente</h2>
                        <button className="btn-personalizado btn botao-lg mt-3">Investir Agora</button>
                    </div>
                    <div className="col-4 offset-3 img-personalizada ">
                        <img src={notreDame} alt="" className="helpDesk"/>
                    </div>
                </section>
            </main>
    
        )
    }
}