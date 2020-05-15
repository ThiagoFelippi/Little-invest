import React from 'react'

import './Vantagens.css'
import Vantagem from './Quadrados_vantagens/Vantagem'

import img1 from '../../assets/imgs/page/img1.svg'
import img2 from '../../assets/imgs/page/img2.svg'
import img3 from '../../assets/imgs/page/img3.svg'

export default class Vantagens extends React.Component {
    render() {
        return (
            <section className="vantagens d-flex flex-column justify-content-center align-items-center">
                <h1>Mais fácil que gastar dinheiro</h1>
                <div className="d-flex justify-content-center">
                    <Vantagem img={img1} title="Acesso Online" text="Acesse a nosssa plataforma e escolha o seu plano" />
                    <Vantagem img={img2} title="Rendimento Fácil" text="Espera até a data de resgate e acompanhe o rendimento" />
                    <Vantagem img={img3} title="Resgate Simples" text="Retire o rendimento e gaste parte em viagens e compras" />
                </div>
                <button className="btn-contato btn">Entre em contato</button>
            </section>
        )
    }
}