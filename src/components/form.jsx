import React from 'react';
import { useState } from "react";


const Form = () => {
    const initValues = {
        nombre : {value: '', error: ''},
        apellido : {value: '', error: ''},
        email : {value: '', error: ''},
        password : {value: '', error: ''},
        confirmPassword : {value: '', error: ''}

    }

    const [inputs, setInputs] = useState(initValues);
    const {nombre , apellido, email, password, confirmPassword} = inputs;
    


    const onChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]: {value: e.target.value, error: ''}
            });
    }

    const handleInputError = (e) =>{
        onChange(e);

        if (e.target.type === 'text' && e.target.value.length < 2 && e.target.value.length > 0){
            setInputs({
                ...inputs,
                [e.target.name] : {value: e.target.value, error: 'el campo tiene que contener al menos 2 caracteres'}
            })
        } else if ((e.target.type === 'email') && (e.target.value.length < 5 && e.target.value.length > 0)){
            setInputs({
                ...inputs,
                [e.target.name] : {value: e.target.value, error: 'el email tiene que contener al menos 5 caracteres'}
            })
        }else if((e.target.name === 'password' && (e.target.value.length < 8) && e.target.value.length > 0)){
            setInputs({
                ...inputs,
                [e.target.name] : {value: e.target.value, error: 'el password tiene que contener al menos 8 caracteres'}
            })
        }if ((e.target.name === 'confirmPassword') && e.target.value.length > 0 && (((e.target.value)) != password.value)){
            setInputs({
                ...inputs,
                [e.target.name] : {value: e.target.value, error: 'el password tiene que coincidir'}
            })
        }
    }


    return(
        <form>
            <div class="input-group mb-3-md-center">
            <label htmlFor='nombre' class="input-group-text w-25 p-2" id="inputGroup">Nombre: </label>
            <input onChange={handleInputError} class="w-25" type="text" name="nombre" value={nombre.value}/>
            </div>
            { nombre.error && <p>{ nombre.error }</p>}
            <div class="input-group mb-3-md-center">
            <label htmlFor='apellido' class="input-group-text w-25 p-2 text-center" id="inputGroup">Apellido: </label>
            <input onChange={handleInputError} class="w-25" type="text" name="apellido" value={apellido.value}/>
            </div>
            { apellido.error && <p>{ apellido.error }</p>}
            <div class="input-group mb-3-md-center">
            <label htmlFor='email' class="input-group-text w-25 p-2" id="inputGroupt">Email: </label>
            <input onChange={handleInputError} class="w-25" type="email" name="email" value={email.value}/>
            </div>
            { email.error && <p>{ email.error }</p>}
            <div class="input-group mb-3-md-center">
            <label htmlFor='password' class="input-group-text w-25 p-2" id="inputGroup">Password: </label>
            <input onChange={handleInputError} class="w-25" type="password" name="password" value={password.value}/>
            </div>
            { password.error && <p>{ password.error }</p>}
            <div class="input-group mb-3-md-center">
            <label htmlFor='confirmPassword' class="input-group-text w-25 p-2" id="inputGroup">Confirm Password: </label>
            <input onChange={handleInputError} class="w-25" type="password" name="confirmPassword" value={confirmPassword.value}/>
            </div>
            { confirmPassword.error && <p>{ confirmPassword.error }</p>}
        </form>
    )
}

export default Form;