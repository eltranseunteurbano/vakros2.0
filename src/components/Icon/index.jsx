import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faHatCowboy, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './index.scss';

const Icon = ( props ) => {

    let value = '';

    switch ( props.value ){
        case 'wp':
            value = faWhatsapp;
            break;
        
        case 'fb':
            value = faFacebookF;
            break;
        
        case 'ig':
            value = faInstagram;
            break;

        case 'menu':
            value = faHatCowboy;
            break;
        
        case 'angle':
            value = faAngleDown;
            break;
        
        default:
            value = "";
            break;
    }

    return(
        <div className={ props.bg ? 'icon-bg' : 'icon'}>
            <FontAwesomeIcon className="icon__svg" icon={ value } /> 
        </div>
    )

}

export default Icon;