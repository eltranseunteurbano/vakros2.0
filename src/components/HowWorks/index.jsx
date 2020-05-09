import React from 'react'
import './index.scss'

import CardHowWorks from '../CardHowWorks';

const information = [
    {
        id: 1,
        title: "Meta mensual",
        text: "Cada mes analizamos entre diferentes proyectos ganaderos para lanzar proyectos rentables.",
        img: "/img/MetaMensual.svg"
    },{
        id: 2,
        title: "Inviertes",
        text: "Una vez la meta es lanzada, podrás escoger en qué proyecto ganadero invertir.",
        img: "/img/Inviertes.svg"
    },{
        id: 3,
        title: "Recibes",
        text: "Después de 18 meses recibes el valor de tu inversión más la rentabilidad que obtuvo.",
        img: "/img/Recibes.svg"
    }
]

const HowWorks = () =>{

    return(
        <section className="HowWorks">

            <article className="HowWorks__content">

                <h1 className="HowWorks__content__title">¿Por qué invertir con Vakros?</h1>
                <p className="HowWorks__content__text">Queremos que tu dinero guardado se multiplique sin que esto te genere estrés</p>

                <article className="HowWorks__content__body">
                    {
                        information.map( ( child ) => { 
                            return(
                                <div className="HowWorks__content__body__item" key={child.id}>
                                    <CardHowWorks props={child}/>
                                </div>
                            )
                        })
                    }
                </article>

            </article>

        </section>
    )
}

export default HowWorks;