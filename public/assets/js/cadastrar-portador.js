$('.select2').select2();

let campos = ["name", "surname", "date-birth",
     "nacionalidade", "genero", "pais",
    "codigopostal", "endereco",
    "numero", "complemento", "bairro",
    "municipio", "estado", "contato1", "locacao", "email"];


let form = $("#form-meus-dados");


$("#salvar").click(function () {

    if (tratar_campos(campos)) {
        $.get("", form.serialize(), (data, status) => {
            if (status === 'success') {
                title = 'Cadastro realizada com sucesso!';
                text = "Cadastro realizado.";
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


pegarPaises("nacionalidade");