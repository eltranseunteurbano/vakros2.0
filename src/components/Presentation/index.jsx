import React from 'react'
import Modal from 'react-modal';
import './index.scss';

import Register from '../Register';

const Presentation = ( props ) => {
    Modal.setAppElement('#root')

    const [ modalIsOpen, setModalIsOpen ] = React.useState( props.modal );

    return(
        <section className="Presentation" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "img/presentationBackground.svg" + ")" }}>
            <article className="Presentation__content">
                <h1 className="Presentation__content__title"> Únete a Vakros <br/>y gana en grande</h1>
                <div className="Presentation__content__img"><img src={ process.env.PUBLIC_URL + "img/home_ilustration.svg" } alt="Ilustración de finca ganadera"/></div>
                <p className="Presentation__content__text">Obtén hasta un 20% de efectivo anual de utilidad ayudando a pequeñas y medianas fincas ganaderas colombianas.</p>
                <button onClick={() => setModalIsOpen(true)} className="Presentation__content__button">Registrate</button>
                <Modal 
                    isOpen = { modalIsOpen }
                    onRequestClose = { () => setModalIsOpen( false ) }
                    className = "Register_modal"
                >
                    <Register setModal={setModalIsOpen} />
                </Modal>
            </article>
        </section>
    )

}

export default Presentation;