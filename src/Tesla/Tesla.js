import React from 'react'

const Tesla = (props) => {
    return(
        <div>
            <p>I am a {props.color} Tesla and I have {props.doors} doors</p>
            <div>{props.children}</div>
            <input type="text" onChange={props.changed} />
        </div>
    );
}

export default Tesla;