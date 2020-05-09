import React from 'react'
import './index.scss'

import { Link } from 'react-router-dom'

import * as Routes from '../../assets/js/Routes'

const InviertePresentation = () => {

    return(
        <section className="InviertePresentation"> 
            <h1 className="InviertePresentation__title">Ser un Vakro es genial</h1>
            <p className="InviertePresentation__text">Únete a la comunidad que quiere apostarle al crecimiento de los campesinos ganaderos en Colombia.</p>
            <div className="InviertePresentation__img "><img src={ process.env.PUBLIC_URL + "img/BeVakros.svg" } alt="Imagen de presentación" /></div>
            <Link to={Routes.CONTACTANOS} className="InviertePresentation__btn" type="#contact">Contactar Ahora</Link>
        </section>
    )
}

export default InviertePresentation;