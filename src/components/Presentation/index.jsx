import React from 'react'
import './index.scss';

import { Link } from 'react-router-dom'

import * as Routes from '../../assets/js/Routes'
const Presentation = () => {

    return(
        <section className="Presentation" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "img/presentationBackground.svg" + ")" }}>
            <article className="Presentation__content">
                <h1 className="Presentation__content__title"> Únete a Vakros <br/>y gana en grande</h1>
                <div className="Presentation__content__img"><img src={ process.env.PUBLIC_URL + "img/home_ilustration.svg" } alt="Ilustración de finca ganadera"/></div>
                <p className="Presentation__content__text">Obtén hasta un 20% de efectivo anual de utilidad ayudando a pequeñas y medianas fincas ganaderas colombianas.</p>
                <Link to={Routes.CONTACTANOS} className="Presentation__content__button">Contactar ahora</Link>
            </article>
        </section>
    )

}

export default Presentation;