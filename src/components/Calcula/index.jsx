import React from 'react'
import './index.scss'

const Calcula = () => {

    const [ value, setValue ] = React.useState(200000);
    const [ reveneu, setReveneu ] = React.useState(0)
    const [ finalReveneu, setFinalReveneu ] = React.useState(0);
    
    const ternera = 5600;
    const vaca = 18000;

    React.useEffect( () => {
        if(value){
            let utilidades = ( ( value / ternera ) * vaca );
            let utilidadesFinales = parseInt( ( utilidades * 0.2 ) );
            let valorFinal = parseInt(  parseInt(utilidadesFinales) + parseInt(value));
            setReveneu( new Intl.NumberFormat().format(utilidadesFinales))
            setFinalReveneu( new Intl.NumberFormat().format(valorFinal))
        }

    },[value] )

    return(
        <section className="Calcula" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "img/CalculaBackground.svg" + ")"}}>
            <article className="Calcula__content">
                
                <div className="Calcula__content__img">
                    <img src={ process.env.PUBLIC_URL + "img/HombreCalcula.svg" } alt="Ilustración hombre invirtiendo"/>
                </div>

                <div className="Calcula__content__body">
                    <h1 className="Calcula__content__body__title">Cálcula tu ganancia</h1>
                    
                    <p className="Calcula__content__body__text">Invertir es super sencillo, el ciclo de un hato ganadero tarda hasta 18 meses. Pruébalo tu mismo con Vakros.</p>
                    
                    <label className="Calcula__content__body__item Calcula__content__body__input">
                        <p>¿Cuál es el valor de tu inversión?</p>
                        <input type="number" placeholder="$ 200.00" min="200000" required value={value} onChange={ ( event ) => setValue( event.target.value ) } />
                    </label>

                    <label className="Calcula__content__body__item">
                        <p>Tu ganancias antes de impuestos serían</p>
                        <input type="text" placeholder="$270.000 COP" value={ "$ " + reveneu + " COP"} disabled/>
                    </label>
                    
                    <label className="Calcula__content__body__item">
                        <p>En total recibirías</p>
                        <input type="text" placeholder="$270.000 COP" value={ "$ " + finalReveneu + " COP"} disabled/>
                    </label>
                </div>

                <div className="Calcula__content__img">
                    <img src={ process.env.PUBLIC_URL + "img/MujerCalcula.svg" } alt="Ilustración hombre invirtiendo"/>
                </div>
            </article>
        </section>
    )

}

export default Calcula;