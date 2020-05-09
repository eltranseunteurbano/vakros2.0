import React from 'react';
import './index.scss';
import * as Routes from '../../assets/js/Routes'

import { Link } from 'react-router-dom';

import Icon from '../Icon';

const Footer = () => {

    const backgroundStyles = {
        backgroundImage: 'url(' + process.env.PUBLIC_URL + '/img/fondoFooter.svg' + ')',
    }

    return(
        <footer className="footer">

            <article className="footer__img" style={backgroundStyles} >
            </article>

            <article className="footer__wrapper">


                <div className="footer__wrapper__content">

                    <div className="footer__wrapper__content__item">
                        <h2>Nosotros</h2>
                        <p>Vakros es una plataforma digital confiable que permite conectar inversionistas con proyectos ganaderos</p>
                    </div>

                    <div className="footer__wrapper__content__item">
                        <h2>Información</h2>
                        <Link to={Routes.PREGUNTAS} > Preguntas Frecuentes </Link>
                        <Link to={Routes.INDEX} > Calcula tu Ganancia </Link>
                        {/*<Link to="/" > Política de Protección de Datos </Link>
                        <Link to="/" > Términos y Condiciones </Link>*/}
                    </div>

                    <div className="footer__wrapper__content__item">
                        <h2>Contacto</h2>
                        <h1>Vakros</h1>
                        <p>Colombia</p>
                        <a href="https://api.whatsapp.com/send?phone=573022880083" target="_blank" rel="noopener noreferrer"> +57 302 288 0083 </a>
                        <a href="mailto:vakroscolombia@gmail.com" target="_blank" rel="noopener noreferrer"> vakroscolombia@gmail.com </a>
                    </div>
                </div>
                
                <div className="footer__wrapper__social">
                    <p className="footer__wrapper__social__text"> Todos los derechos reservados. </p>
                    <div className="footer__wrapper__social__items">
                        <a href="https://api.whatsapp.com/send?phone=573022880083" target="_blank" rel="noopener noreferrer" className="footer__wrapper__social__items__icon"> <Icon value={ 'wp' } bg={ true } /> </a>
                        <a href="https://www.instagram.com/vakros.co/" target="_blank" rel="noopener noreferrer" className="footer__wrapper__social__items__icon"> <Icon value={ 'ig' } bg={ true } /> </a>
                        <a href="https://www.facebook.com/vakros/" target="_blank" rel="noopener noreferrer" className="footer__wrapper__social__items__icon"> <Icon value={ 'fb' } bg={ true } /> </a>
                    </div>
                </div>
            </article>

        </footer>
    )

}

export default Footer;