import React from 'react'
import './index.scss'

import QuestionItem from '../QuestionItem'

const information = [
    {
        id: 1,
        title: "¿Qué es Vakros?",
        text: "Somos una plataforma web donde recolectamos la inversión de las personas desde $200.000 COP y esperamos a que la meta mensual se cumpla, para después realizar una inversión en ganadería con pequeñas y medianas fincas ganaderas del departamento del valle del cauca, donde después de 12 a 18 meses que se cumple el ciclo de un lote ganadero se venden y se le entrega a cada inversor su monto inicial y el 20% correspondiente de utilidades de su inversión."
    },{
        id: 2,
        title: "¿Por qué debo invertir en ganadería?",
        text: "La ganadería es uno de los mercados más regulados por entidades gubernamentales nacionales y departamentales y por diferentes asociaciones, lo que genera que el producto sea de muy alta calidad logrando que sea un mercado estable asegurando en un 90% el retorno de inversión una vez completado el ciclo del lote ganadero que tiene una duración entre 12 a 18 meses."
    },{
        id: 3,
        title: "Tengo muy pocos ahorros, ¿puedo invertir?",
        text: "En Vakros buscamos apoyar a todas esas personas que quieren invertir sus ahorros pero no saben cómo ni en dónde. Por esa razón tenemos un proceso bastante rápido, sencillo, seguro y económico."
    },{
        id: 5,
        title: "¿Cuánto tiempo tardará mi inversión en ser devuelta?",
        text: "El tiempo de crecimiento que tarda un hato ganadero es de apróximadamente 12 a 18 meses, por lo cual tu inversión tardará el mismo tiempo en ser devuelto."
    },{
        id: 6,
        title: "¿Cómo son divididas las utilidades totales?",
        text: "Del 100% de las utilidades que genera la inversión, el 20% es para ti, el 80% restantes es para las fincas y para gastos administrativos."
    },{
        id: 7,
        title: "¿Cómo recibo mi ganancia?",
        text: "Te enviaremos una transferencia con el dinero que invertiste más la rentabilidad neta al número de cuenta que hayas registrado en Vakros."
    }
]


const PreguntasContent = () => {

    return(
        <section className="PreguntasContent" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "img/PreguntasBackground.svg" + ")"}}>

            <h1 className="PreguntasContent__title">¿Tienes preguntas?</h1>
            <p className="PreguntasContent__text">Genial, ¡nosotros tenemos respuestas!</p>

            <article className="PreguntasContent__wrapper">
                {
                    information.map( ( child ) => {
                        return(
                            <QuestionItem props={child} key={child.id} state={child.id === 1 ? true : false } />
                        )
                    } )
                }
            </article>

        </section>
    )

}

export default PreguntasContent;