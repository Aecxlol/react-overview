import React from "react";

function Client(props) {
    const {details, onDelete} = props;
    return (
        <li>
            {details.nom}
            <button onClick={() => onDelete(details.id)}>X</button>
        </li>
    )
}

export default Client;