import React from 'react'

const Button = ({ toggleEditor }) => {
    return (
        <a href="/" className="waves-effect waves-light btn red lighten-2 left" onClick={(e) => toggleEditor(e)}><i className="material-icons right">code</i>Edit JSON</a>
    )
}

export default Button;