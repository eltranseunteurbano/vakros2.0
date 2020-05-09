import React from 'react'

import InviertePresentation from '../../components/InviertePresentation'
import Requisitos from '../../components/Requisitos'
import Calcula from '../../components/Calcula'
import WantsInvest from '../../components/WantsInvest'

const Invertir = () => {

    return(
        <section className="Invertir appear">

            <InviertePresentation />
            <Requisitos />
            <Calcula />
            <WantsInvest />

        </section>
    )

}

export default Invertir;