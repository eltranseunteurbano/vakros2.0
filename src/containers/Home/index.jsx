//Librerias
import React from 'react'
import ReactPixel from 'react-facebook-pixel';

import Presentation from '../../components/Presentation'
import WhyVakros from '../../components/WhyVakros';
import HowWorks from '../../components/HowWorks';
import WantsInvest from '../../components/WantsInvest'
import Calcula from '../../components/Calcula';

const Home = ( props ) => {

    ReactPixel.pageView();
    
    return(
        <section className="Home appear">
            <Presentation modal={props.modal}/>
            <WhyVakros />
            <Calcula />
            <HowWorks/>
            <WantsInvest />

        </section>
    )
    

}

export default Home;