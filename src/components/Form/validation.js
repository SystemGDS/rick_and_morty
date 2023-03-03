export default function validation(inputs){
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword = new RegExp ("[0-9]");
    const errors = {};

    if (!regexEmail.test(inputs.username)) {
        errors.username = 'Usuario debe ser un email valido';        
    }
    if (!inputs.username) {
        errors.username = 'El nombre es obligatorio';        
    }

    if (inputs.username.length > 35) {
        errors.username = 'maximo 35 caracteres';        
    }

    if(!regexPassword.test(inputs.password)) {
        errors.password = 'Al menos 1 caracter especial';
    }

    if(inputs.password.length < 6 ||  inputs.password.length > 10) {
        errors.password = 'minimo 6 caracteres y maximo 10 caracteres';
    }   

    return errors;    
}