import React from 'react'

import './Investimento.css'
import Quadrado from './Investir/Quadrado'

export default class Investimento extends React.Component{
    render(){
        return(
            <section className="section-personalizada d-flex justify-content-center">
                <Quadrado title="LCI 2018/12" subtitle="110% do CBD" banco="Banco Certo"/>
                <Quadrado title="LCI 2020/01" subtitle="115% do CBD" banco="Santrafe"/>
                <Quadrado title="LCI 2022/06" subtitle="117% do CBD" banco="Banco Inova"/> 
                <Quadrado title="LCI 2018/07" subtitle="122% do CBD" banco="Cofre Agora"/> 
            </section>
        )
    }
}