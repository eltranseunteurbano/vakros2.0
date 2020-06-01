import React from 'react'
import Modal from 'react-modal';

import './index.scss'
import Register from '../Register';

const InviertePresentation = () => {
    Modal.setAppElement('#root')
    const [ modalIsOpen, setModalIsOpen ] = React.useState( false );

    return(
        <section className="InviertePresentation"> 
            <h1 className="InviertePresentation__title">Ser un Vakro es genial</h1>
            <p className="InviertePresentation__text">Únete a la comunidad que quiere apostarle al crecimiento de los campesinos ganaderos en Colombia.</p>
            <div className="InviertePresentation__img "><img src={ process.env.PUBLIC_URL + "img/BeVakros.svg" } alt="Imagen de presentación" /></div>
            <button onClick={() => setModalIsOpen(true)} className="InviertePresentation__btn" type="#contact">Registrate</button>
        
            <Modal 
                isOpen = { modalIsOpen }
                onRequestClose = { () => setModalIsOpen( false ) }
                className = "Register_modal"
            >
                <Register setModal={setModalIsOpen} />
            </Modal>

        </section>
    )
}

export default InviertePresentation;