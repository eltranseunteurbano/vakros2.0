const onElementHeightChange = (elm, callback) => {
    var lastWidth = elm.clientWidth, newWidth;
    (function run(){
        newWidth = elm.clientWidth;
        if( lastWidth !== newWidth )
            callback(newWidth)
        lastWidth = newWidth

        if( elm.onElementHeightChangeTimer )
        clearTimeout(elm.onElementHeightChangeTimer)

        elm.onElementHeightChangeTimer = setTimeout(run, 200)
    })()
}

export default onElementHeightChange;