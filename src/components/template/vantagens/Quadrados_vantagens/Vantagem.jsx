import React from 'react'

export default props =>
    <div className="vantagem d-flex flex-column justify-content-center align-items-center">
        <img src={props.img} alt=""/>
        <div className="">
            <h1 className="text-center vantagens-title">{props.title}</h1>
            <p className="text-center vantagens-text">{props.text}</p>
        </div>
    </div>
