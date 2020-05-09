import React from 'react'

import './index.scss'

import InformationSection from '../InformationSection';


const information = [
    {
        id: 1,
        imgLeft: true,
        title: "Mejor que un CDT",
        img: "img/CDT.svg",
        text: "Permitimos que tu rentabilidad sea mucho mayor a la que un CDT y otras de las alternativas de inversión más comunes que cualquier entidad bancaria te podría oferecer."
    },{
        id: 2,
        imgLeft: false,
        title: "Rentabilidad",
        img: "img/Rentabilidad.svg",
        text: "El ganado es uno de los sectores más rentables de la economía, por lo tanto al invertir con nosotros puedes obtener hasta un 20% efectivo anual."
    },{
        id: 3,
        imgLeft: true,
        title: "Invierte desde montos muy pequeños",
        img: "img/Ahorros.svg",
        text: "En Vakros podrás invertir desde $200.000 COP, mientras que otras entidades sólo te permiten desde $1’000.000 COP."
    },{
        id: 4,
        imgLeft: false,
        title: "Somos expertos en Ganadería",
        img: "img/Expertos.svg",
        text: "Todas las fincas ganaderas vinculadas a Vakros cuentan con una infraestructura adecuada y un excelente personal para el cuidado del ganado."
    },{
        id: 5,
        imgLeft: true,
        title: "Ayudas a emplear campesinos ganaderos",
        img: "img/Campesinos.svg",
        text: "Además de ganar, estarás ayudando a cientos de campesinos cuya principal fuente de ingresos es la ganadería."
    },

];

const WhyVakros = () => {
    return(
        <section className="WhyVakros">

            <h1 className="WhyVakros__title">¿Por qué invertir con Vakros?</h1>
            <p className="WhyVakros__text">Queremos que tu dinero guardado se multiplique sin que esto te genere estrés</p>

            <article className="WhyVakros__content">
                {
                    information.map( ( child ) => { 
                        return(
                            <InformationSection key={child.id} props={child}/>
                        )
                    } )
                }
            </article>

        </section>
    )
}

export default WhyVakros;