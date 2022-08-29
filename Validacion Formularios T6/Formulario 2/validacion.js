
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    direccion: /^[A-Za-z0-9]+$/, 
    telefono:  /^\d{8,11}$/,
    fecha: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
    nit: /^\d{10}$/,
    edad: /^\d{8,11}$/,
    puesto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    salario: /^\d{5}$/,
    horas: /^\d{2}$/,

}//objeto que guarda las expesiones regulares para validar


const campos = {
    nombre: false,
    correo: false,
    direccion: false,
    telefono: false,
    fecha: false,
    nit: false,
    edad: false,
    puesto: false,
    salario: false,
    horas: false
}

const formulario = document.getElementById('formulario');//con esto se accede al formulario
const inputs  = document.querySelectorAll('#formulario input, select');// le decimos que acceda a todos los inputs del formulario con el id formulario

const validarFormulario = (e) => {
	switch (e.target.name) {
		case 'nombre':
            validarCampo(expresiones.nombre, e.target, e.target.name);
		break;
        case 'fecha':
            validarCampo(expresiones.fecha, e.target, e.target.name);
		break;
        case 'direccion':
            validarCampo(expresiones.direccion, e.target, e.target.name);
		break;
        case 'telefono':
            validarCampo(expresiones.telefono, e.target, e.target.name);
		break;
        case 'correo':
            validarCampo(expresiones.correo, e.target, e.target.name);
		break;
        case 'nit':
            validarCampo(expresiones.nit, e.target, e.target.name);
		break;
        case 'edad':
            validarCampo(expresiones.edad, e.target, e.target.name);
		break;
        case 'puesto':
            validarCampo(expresiones.puesto, e.target, e.target.name);
		break;
        case 'salario':
            validarCampo(expresiones.salario, e.target, e.target.name);
		break;
        case 'horas':
            validarCampo(expresiones.horas, e.target, e.target.name);
		break;
	}
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(campo).classList.remove('error');
        if(campo !== 'direccion'){
            document.getElementById(`error${campo}`).classList.add('d-none');
        }
        campos[campo] = true;
    }else {
        document.getElementById(campo).classList.add('error');
        if(campo !== 'direccion'){
            document.getElementById(`error${campo}`).classList.remove('d-none');
        }
    }
    if(input.value === ''){
        document.getElementById(campo).classList.remove('error');
        if(campo !=='direccion'){
            document.getElementById(`error${campo}`).classList.add('d-none');
        }
    }
}
inputs.forEach((input)=> {
    input.addEventListener('keyup',validarFormulario);//cuando se terminada de teclear
    input.addEventListener('blur',validarFormulario);//cuando se da click fuera del formulario

}); //funcion que se ejecuta por cada input de la pagina 

//acedemos a formulario
formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();//evita enviar los datos

    // if(campos.nombre && campos.apellido && campos.correo && campos.telefono && campos.ciudad && campos.password && campos.password2 && campos.alergias){
    //     formulario.reset();
    //     document.getElementById('valido_required').classList.add('text-success');
    //     document.getElementById('valido_required').classList.remove('d-none');
    //     document.getElementById('error_required').classList.add('d-none')   
    //     setTimeout(() => {
    //        document.getElementById('valido_required').classList.add('d-none'); 
    //     }, 4000);
    // }else{
    //     document.getElementById('error_required').classList.remove('d-none')   
    // }
});