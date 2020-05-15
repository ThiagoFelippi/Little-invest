import React from 'react'

export default props => 
    <div className="quadrado-investimento d-flex flex-column align-items-start px-4 ">
        <h1 className="title">{props.title}</h1>
        <h2 className="subtitle">{props.subtitle}</h2>
        <p className="linha align-self-start"/>
        <h4 className="banco">{props.banco}</h4>
        <button className="btn-personalizado btn-assinar btn ">
            <div className="d-flex justify-content-between align-items-center div-button">
                <p>Assinar</p>
                <p className="sinal">+</p>
            </div>
        </button>
    </div>