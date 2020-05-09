import React from 'react'

import Icon from '../Icon/index'

const QuestionItem = ( props ) => {

    const [ open, setOpen ] = React.useState(props.state)

    return(
        <div className={open ? "PreguntasContent__wrapper__item active" : "PreguntasContent__wrapper__item"} onClick={ () => setOpen(!open)}>
                                
            <div className="PreguntasContent__wrapper__item__header">
                <h1 className="PreguntasContent__wrapper__item__header__title">{props.props.title}</h1>
                <div className="PreguntasContent__wrapper__item__header__down">
                    <Icon value="angle" bg = { false }/>
                </div>
            </div>

            <div className="PreguntasContent__wrapper__item__body">
                <p className="PreguntasContent__wrapper__item__body__text">{props.props.text}</p>
            </div>
        </div>
    )
}

export default QuestionItem;