$('.select2').select2();

let arrayCampos = ["name", "surname", "date-birth",
                   "identity", "nationality", "codigopostal",
                   "logradouro", "numerorua", "complemento",
                   "bairro", "cidade", "estado", "telf", "email"];


let form = $("#form-meus-dados");
$("#cadastro").click(function () {

    if (tratar_campos(arrayCampos)) {
        $.get("", form.serialize(), (data, status) => {
            if (status === 'success') {
                title = 'Cadastro realizado com sucesso!';
                text = "Código CIVA: " + gerarCodigoCiva();
                swalAlertSuccess(title, text, limparCamposCadastroPortador);

            } else {
                title = 'Erro!';
                text = 'Algum erro ocorreu e seus dados não foram enviados.';
                swalAlertError(title, text, callback);
            }
        });
    } else {
        title = 'Campos não preenchidos!';
        text = 'Todos os campos precisam ser preenchidos!';
        swalAlertError(title, text, callback);
    }
});


function gerarCodigoCiva() {
    return "BRASKSD32132121";
}

function limparCamposCadastroPortador() {
    $("#name").val("");
    $("#surname").val("");
    $("#date-birth").val("");
    $("#identity").val("");

    // Mudando a posição do select
    $('#nationality').select2();
    //seleciona o valor da posição desejada
    let valor = $("#nationality option:eq(1)").val();
    //seleciona no select2 e disapara o evento
    $('#nationality').val(valor).trigger('change');


    $("#codigopostal").val("");
    $("#logradouro").val("");
    $("#numerorua").val("");
    $("#numerorua").val("");
    $("#complemento").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#estado").val("");
    $("#telf").val("");
    $("#email").val("");
}

pegarPaises("nationality");