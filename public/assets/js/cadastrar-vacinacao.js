$('.select2').select2();

let form = $("#form-painel-portador");
let arrayCampos = ["laboratorio", "vacina", "numerodoses",
    "lote", "unidade", "date-birth", "identity"];
let valor;

$("#cadastro").click(function () {
  
    if (tratar_campos(arrayCampos)) {
       
        $.get("", form.serialize(), (data, status) => {
            console.log("Entrou 2")
            if (status === 'success') {
                title = 'Cadastro realizado com sucesso!';
                text = "Vacinação cadastrada.";
                swalAlertSuccess(title, text, limparCamposCadastroVacinacao);

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


function limparCamposCadastroVacinacao() {
    $("#lote").val("");

    // Mudando a posição do select
    //seleciona o valor da posição desejada
    valor = $("#laboratorio option:eq(1)").val();
    //seleciona no select2 e disapara o evento
    $('#laboratorio').val(valor).trigger('change');

    valor = $("#vacina option:eq(1)").val();
    //seleciona no select2 e disapara o evento
    $('#vacina').val(valor).trigger('change');

    valor = $("#numerodoses option:eq(1)").val();
    //seleciona no select2 e disapara o evento
    $('#numerodoses').val(valor).trigger('change');

    valor = $("#unidade option:eq(1)").val();
    //seleciona no select2 e disapara o evento
    $('#unidade').val(valor).trigger('change');
}