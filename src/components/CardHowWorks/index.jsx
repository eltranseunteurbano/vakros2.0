import React from 'react'
import './index.scss'

const CardHowWorks = ( props ) =>{

    return(
        <article className="CardHowWorks">
            <h1 className="CardHowWorks__title">{ props.props.title }</h1>
            <div className="CardHowWorks__img"><img src={ process.env.PUBLIC_URL + props.props.img } alt={ props.props.text } /> </div>
            <p className="CardHowWorks__text">{ props.props.text }</p>
        </article>
    )
}

export default CardHowWorks;