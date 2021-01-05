import React from 'react';

function Message(props) {
    if (props.value === 0)
        return <p style={{color : "green"}}>The board is solved</p>

    else if (props.value === 1)
        return <p style={{color : "red"}}>The board has an invalid answer</p>

    else if (props.value === 2)
        return <p style={{color : "red"}}>The board is incomplete</p>

    else
        return <p></p>
    
}

export default Message;