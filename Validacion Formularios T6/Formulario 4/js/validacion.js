
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    comentario: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/,  // 7 a 14 numeros.
    fecha: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
    curso: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}//objeto que guarda las expesiones regulares para validar


const formulario = document.getElementById('formulario');//con esto se accede al formulario
const inputs  = document.querySelectorAll('#formulario input');// le decimos que acceda a todos los inputs del formulario con el id formulario

const validarFormulario = (e) => {
	switch (e.target.name) {
		case 'nombre':
            validarCampo(expresiones.nombre, e.target, e.target.name);
		break;
        case 'telefono':
            validarCampo(expresiones.telefono, e.target, e.target.name);
		break;
        case 'correo':
            validarCampo(expresiones.correo, e.target, e.target.name);
		break;
        case 'inicio':
            validarCampo(expresiones.inicio, e.target, e.target.name);
		break;
        case 'curso':
            validarCampo(expresiones.curso, e.target, e.target.name);
		break;
        case 'comentario':
            validarCampo(expresiones.comentario, e.target, e.target.name);
		break;
	}
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(campo).classList.remove('focus:bg-red-700');
        document.getElementById(campo).classList.remove('bg-red-700');
    }else {
        document.getElementById(campo).classList.add('bg-red-700');
        document.getElementById(campo).classList.add('focus:bg-red-700');
    }
    if(input.value === ''){
        document.getElementById(campo).classList.remove('focus:bg-red-700');
        document.getElementById(campo).classList.remove('bg-red-700');
    }
}
inputs.forEach((input)=> {
    input.addEventListener('keyup',validarFormulario);//cuando se terminada de teclear
    input.addEventListener('blur',validarFormulario);//cuando se da click fuera del formulario

}); //funcion que se ejecuta por cada input de la pagina 

//acedemos a formulario
formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();//evita enviar los datos
});