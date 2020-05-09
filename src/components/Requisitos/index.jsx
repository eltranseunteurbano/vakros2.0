import React from 'react'

import './index.scss'

import InformationSection from '../InformationSection';


const information = [
    {
        id: 1,
        imgLeft: true,
        title: "Mayoría de Edad",
        img: "img/Edad.svg",
        text: "Debes tener al menos 18 años para invertir en cualquier proyecto ganadero con Vakros."
    },{
        id: 2,
        imgLeft: false,
        title: "Monto mínimo",
        img: "img/Ahorros.svg",
        text: "Ya no hay excusas para que tu dinero se quede guardado, en Vakros podrás invertir desde $ 200.000 pesos colombianos"
    },{
        id: 3,
        imgLeft: true,
        title: "Ser Colombiano",
        img: "img/Colombiano.svg",
        text: "Para ser un Vakro deberás ser ciudadano colombiano."
    },{
        id: 4,
        imgLeft: false,
        title: "Esper 18 meses",
        img: "img/Tiempo.svg",
        text: "Vakros te da más, sin embargo debes entender que el ciclo de vida del ganado tarda minimo 18 meses, así que tu ganancia será entregada cuando este termine."
    }

];

const WhyVakros = () => {
    return(
        <section className="WhyVakros">

            <h1 className="WhyVakros__title">Requisitos</h1>
            <p className="WhyVakros__text">Obtén hasta un 20% de utilidades inviertiendo en pequeñas y medianas fincas ganaderas colombianas</p>

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