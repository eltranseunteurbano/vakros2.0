import React from 'react'
import './index.scss'

const InformationSection = ( props ) => {

    return(
        <article className={ props.props.imgLeft ? "InformationSection" : "InformationSection InformationSection-right"}>

            <article className="InformationSection__content">
                <h1 className="InformationSection__content__title">{ props.props.title }</h1>
                <p className="InformationSection__content__text">{ props.props.text }</p>
                <div className="InformationSection__content__img">
                    <img src={ process.env.PUBLIC_URL + props.props.img } alt={ props.props.text }/>
                </div>
            </article>


        </article>
    )

}

export default InformationSection;
