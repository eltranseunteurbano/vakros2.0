import React from 'react'
import Swal from 'sweetalert2';

import ReactGA from 'react-ga';
import Icon from '../Icon';

import './index.scss'

import addRegister from '../../assets/js/addRegister';
import { errorForm } from '../../assets/js/showAlert';

const Register = ( props ) => {

    const [ name, setName ] = React.useState("");
    const [ phone, setPhone ] = React.useState("");
    const [ email, setEmail ] = React.useState("");

    let cleanData = ( event ) => {

        if( name !== "" && phone !== "" && email !== ""){
            Swal.fire({
                title: 'Manejo de datos',
                text: 'Al registrarte estas aceptando que usemos tu información para contactarte con el fin de informarte sobre Vakros.',
                icon: 'warning',
                timer: 7000,
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: 'Registrar'
            }).then( ( result ) => {
                if( result.value ) {
                    addRegister( event, name, email, phone );
                    ReactGA.event({
                        category: 'Registro',
                        action: 'Interesado registrado'
                    })
    
                    setName("");
                    setPhone("");
                    setEmail("");
                    props.setModal(false)
                }
            })
            
        }else{
            errorForm();
        }
    
    }

    return(
        <section className="Register">
            <div className="Register__header">
                <div />
                <h1>Nos estamos preparando</h1>
                <div className="Register__header__close" onClick={ () => props.setModal(false) }> 
                    <Icon value="close" bg={ false } />
                </div>
            </div>
        
            <div className="Register__body">
                <p className="Register__body__text">Estamos trabajando fuertemente para estar listos lo más pronto posible, pero todavía nos falta un poco. Regístrate para ser uno de los primeros en conocer los proyectos ganaderos.</p>
            
                <label className="Register__body__form__item">
                    <p className="Register__body__form__item__title">Nombre y Apellido</p>
                    <input type="text" placeholder="Miguel Lopez" value={name} required onChange={ ( event ) => setName( event.target.value ) } />
                </label>

                <label className="Register__body__form__item">
                    <p className="Register__body__form__item__title">Teléfono</p>
                    <input type="number" placeholder="302 288 0083" min="1000000000" required value={phone} onChange={ ( event ) => setPhone( event.target.value ) } />
                </label>

                <label className="Register__body__form__item">
                    <p className="Register__body__form__item__title">Correo</p>
                    <input type="email" placeholder="miguelopez@correo.com" value={email} required onChange={ ( event ) => setEmail( event.target.value ) } />
                </label>

                <button className={ name !== "" && phone !== "" && email !== "" ? "Register__body__form__btn Register__body__form__btn-actived" : "Register__body__form__btn" } onClick={ ( event ) => {  cleanData( event ) }}>Enviar</button>

            </div>

        </section>
    )
}

export default Register;