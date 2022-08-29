
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,// Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    password2: /^.{4,12}$/,
    telefono:  /^\d{7,14}$/,
    alergias: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
}//objeto que guarda las expesiones regulares para validar


const campos = {
    nombre: false,
    apellido: false,
    correo: false,
    ciudad: false,
    password: false,
    password2: false,
    telefono: false,
    correo: false,
    alergias: false
}

const formulario = document.getElementById('formulario');//con esto se accede al formulario
const inputs  = document.querySelectorAll('#formulario input, textarea');// le decimos que acceda a todos los inputs del formulario con el id formulario

const validarFormulario = (e) => {
	switch (e.target.name) {
		case 'nombre':
            validarCampo(expresiones.nombre, e.target, e.target.name);
		break;
        case 'apellido':
            validarCampo(expresiones.apellido, e.target, e.target.name);
		break;
        case 'correo':
            validarCampo(expresiones.correo, e.target, e.target.name);
		break;
        case 'telefono':
            validarCampo(expresiones.telefono, e.target, e.target.name);
		break;
        case 'ciudad':
            validarCampo(expresiones.ciudad, e.target, e.target.name);
		break;
        case 'alergias':
            validarCampo(expresiones.alergias, e.target, e.target.name);
		break;
        case 'password':
            validarCampo(expresiones.password, e.target, e.target.name);
		break;
        case 'password2':
            validarCampo(expresiones.password2, e.target, e.target.name);
            validarPasswrod2();
		break;
	}
}

const validarPasswrod2 = ()=>{
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');
    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById('error_password').classList.remove('d-none');
        document.getElementById('password2').classList.add('error');
        campos['password2'] = false;
    }else{
        document.getElementById('error_password').classList.add('d-none');
        document.getElementById('password2').classList.remove('error');
        campos['password2'] = true;
    }
    
}


const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(campo).classList.remove('error');
        campos[campo] = true;
    }else {
        document.getElementById(campo).classList.add('error');
    }
    if(input.value === ''){
        document.getElementById(campo).classList.remove('error');
    }
}
inputs.forEach((input)=> {
    input.addEventListener('keyup',validarFormulario);//cuando se terminada de teclear
    input.addEventListener('blur',validarFormulario);//cuando se da click fuera del formulario

}); //funcion que se ejecuta por cada input de la pagina 

//acedemos a formulario
formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();//evita enviar los datos

    if(campos.nombre && campos.apellido && campos.correo && campos.telefono && campos.ciudad && campos.password && campos.password2 && campos.alergias){
        formulario.reset();
        document.getElementById('valido_required').classList.add('text-success');
        document.getElementById('valido_required').classList.remove('d-none');
        document.getElementById('error_required').classList.add('d-none')   
        setTimeout(() => {
           document.getElementById('valido_required').classList.add('d-none'); 
        }, 4000);
    }else{
        document.getElementById('error_required').classList.remove('d-none')   
    }
});