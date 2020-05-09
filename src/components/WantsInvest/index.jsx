import React from 'react'
import './index.scss'
import addRegister from '../../assets/js/addRegister';
import addEmail from '../../assets/js/addEmail';

const WantsInvest = ( props ) => {

    const [ name, setName ] = React.useState("");
    const [ phone, setPhone ] = React.useState("");
    const [ email, setEmail ] = React.useState("");
    const [ message, setMessage ] = React.useState("");

    let cleanData = ( event ) => {
        if( props.type === 'Contact' ){
            addEmail( event, name, email, phone, message );
        }
        else if ( props.type !== 'Contact' ){
            addRegister( event, name, email, phone );
        }

           
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
    }

    return(
        <section className={props.type === 'Contact' ? "WantsInvest WantsInvest-contact" : "WantsInvest"} id="contact">
            
            <article className="WantsInvest__content">
                <article className="WantsInvest__content__body">
                    <h1 className="WantsInvest__content__body__title">{props.type === 'Contact' ? "Háblemos" : "¿Quieres invertir?"}</h1>
                    <p className="WantsInvest__content__body__text">{ props.type === 'Contact' ? "Contáctarnos es super sencillo, déjanos tu mensaje y responderemos tu correo lo más pronto posible.": "Próximamente estaremos operando, si quieres estar informado llena el formulario y obten beneficios para convertirte en un Vakro."}</p>
                    <div className="WantsInvest__content__body__img">
                        <img src={ process.env.PUBLIC_URL + "img/Wants.svg" } alt="Ilustración sobre intención de invertir" />
                    </div>

                </article>
            
                <article className="WantsInvest__content__form">
                    <label className="WantsInvest__content__form__item">
                        <p className="WantsInvest__content__form__item__title">Nombre y Apellido</p>
                        <input type="text" placeholder="Miguel Lopez " value={name} required onChange={ ( event ) => setName( event.target.value ) }/>
                    </label>

                    <label className="WantsInvest__content__form__item">
                        <p className="WantsInvest__content__form__item__title">Teléfono</p>
                        <input type="number" placeholder="302 288 0083" min="1000000000" required value={phone} onChange={ ( event ) => setPhone( event.target.value ) } />
                    </label>

                    <label className="WantsInvest__content__form__item">
                        <p className="WantsInvest__content__form__item__title">Correo</p>
                        <input type="email" placeholder="miguelopez@correo.com" value={email} required onChange={ ( event ) => setEmail( event.target.value ) } />
                    </label>

                    {
                        props.type === 'Contact' &&
                        <label className="WantsInvest__content__form__item">
                            <p className="WantsInvest__content__form__item__title">Mensaje</p>
                            <textarea type="text" placeholder="Lopez" value={message} required onChange={ ( event ) => setMessage( event.target.value ) } />
                        </label>
                    }
                    
                    {
                        props.type === 'Contact' ?
                        <button className="WantsInvest__content__form__btn" disabled={name !== "" && phone !== "" && email !== "" && message !== "" ? false : true} onClick={ ( event ) => { cleanData( event ) } } >Enviar</button>
                        :
                        <button className="WantsInvest__content__form__btn" disabled={name !== "" && phone !== "" && email !== "" ? false : true} onClick={ ( event ) => {  cleanData( event ) }}>Enviar</button>

                    }

                </article>
            </article>

        </section>
    )
}

export default WantsInvest;