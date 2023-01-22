import React from 'react';


const Results = (props) => {
    const { nombre, apellido, email, password, confirmPassword } = props.datos;
    return(
        
        <div>
            <br></br>
            <br></br>
            
            <p>Nombre: {nombre} </p>
            <p>Apellido: {apellido} </p>
            <p>Email: {email} </p>
            <p>Password: {password} </p>
            <p>Confirm Password: {confirmPassword} </p>
        </div>
    )

}

export default Results;