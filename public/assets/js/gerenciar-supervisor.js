$('.select2').select2();

let campos = ["name", "surname", "date-birth",
     "nacionalidade", "tipo-doc-1",
    "doc-1", "genero", "pais",
    "codigopostal", "endereco",
    "numero", "complemento", "bairro",
    "municipio", "estado", "contato1", "email", "locacao"];



let form = $("#form-meus-dados");


$("#salvar").click(function () {

    if (tratar_campos(campos)) {
        $.get("", form.serialize(), (data, status) => {
            if (status === 'success') {
                title = 'Supervisor alterado com sucesso!';
                text = "Alteração realizada.";
                swalAlertSuccess(title, text, callback);

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


$("#excluir").click(function () {
    icon = "info"
    title = 'Deseja realmente excluir esse Supervisor?';
    text = 'Ação irreversível';
    statusInfo = "Supervisor deletado",
    textInfo = "Exclusão realizada."
    swalAlertDelete(title, text, statusInfo, textInfo);
});

pegarPaises("nacionalidade");