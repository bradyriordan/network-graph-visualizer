import React from 'react'

const Button = ({ toggleEditor }) => {
    return (
        <a href="/" className="modal-close waves-effect waves-light btn red lighten-2 left" onClick={(e) => toggleEditor(e)}><i className="material-icons right">code</i>Edit Code</a>
    )
}

export default Button;