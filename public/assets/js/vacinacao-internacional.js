let campos = ["identity", "name", "surname", "date-birth", "possaporte", "pais"];
let form = $("#vacinacao-internacional");

$("#cadastro").click(function () {

    if (tratar_campos(campos)) {
        
        $.get("", form.serialize(), (data, status) => {
            if (status === 'success') {
                title = 'Cadastro realizado com sucesso';
                text = "Vacinação Internacional cadastrada.";
                swalAlertSuccess(title, text, callback);
            } else {
                title = 'Erro!';
                text = 'Algum erro ocorreu e seus dados não foram enviados.';
                swalAlertError(title, text, callback);
            }
        });
    }
});
