//Librerias
import React from 'react'

import Presentation from '../../components/Presentation'
import WhyVakros from '../../components/WhyVakros';
import HowWorks from '../../components/HowWorks';
import WantsInvest from '../../components/WantsInvest'
import Calcula from '../../components/Calcula';

const Home = () => {

    return(
        <section className="Home appear">
            <Presentation />
            <WhyVakros />
            <HowWorks/>
            <Calcula />
            <WantsInvest />

        </section>
    )
    

}

export default Home;