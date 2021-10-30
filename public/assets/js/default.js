// Variaveis que serão usadas pelo swal alert nas outras páginas
// Ao importar aqui não é necessário copiar para os demais aquivos.
let icon;
let title;
let text;
let confirmButtonText;
let confirmButtonCollor;
let callback = () => { };


tratar_campos = (campos) => {
    let erro = false;
  
    for (i = 0; i < campos.length; i++) {
        if (document.getElementById(campos[i]).value === '') {
            erro = true;
         
        }
    }
    return !erro;

}

function swalAlert(icon, title, text, confirmButtonText, confirmButtonCollor, callback){
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonText: confirmButtonText,
        confirmButtonColor: confirmButtonCollor
    }).then(callback);
}

function swalAlertSuccess(title, text, callback){
    Swal.fire({
        icon: 'success',
        title: title,
        text: text,
        confirmButtonText: 'Finalizar',
        confirmButtonColor: '#007bff'
    }).then(callback);
}

function swalAlertError(title, text, callback){
    Swal.fire({
        icon: 'error',
        title: title,
        text: text,
        confirmButtonText: 'Finalizar',
        confirmButtonColor: '#007bff'
    }).then(callback);
}


const Toast = Swal.mixin({
    toast: true,
    position: 'top-start',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})









