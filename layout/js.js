
const form = document.forms["form-page"];
function alo(e) {
    e.preventDefault();
    let erro = false;
    let count = 0;
    for (let i = 0; i < form.length; i++) {
        if(form[i].className.includes("btn")){
            count++
        }   
    }
    for (let i = 0; i < form.length-count; i++) {
        if(form[i].value === "" || form[i]?.options?.selectedIndex === 0) {
            erro = true;
        }
    }
    if (erro) {
        $('#modal-default2').modal('show');
    } else {
        $('#modal-default').modal('show');
    }
    
    !erro;
}
form.onsubmit = alo;