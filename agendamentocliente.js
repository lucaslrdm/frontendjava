function gravar() {

    if (document.getElementById("nomecli").value.length > 0 
        && document.getElementById("emailcli").value.length > 0 
        && document.getElementById("celcli").value.length > 0) {
        if(document.getElementById("emailcli").value.indexOf('@')>0){

        if (document.getElementById("inputAg").value > 0) {

            if (compareDates(document.getElementById("dateagenda").value) == true) {

                var data = document.getElementById("dateagenda").value;
                var ano = data.substring(0, 4);
                var mes = data.substring(5, 7);
                var dia = data.substring(8, 10);

                var databrasil = dia + "/" + mes + "/" + ano
                
                var objeto = {
                    nomecli: document.getElementById("nomecli").value,
                    emailcli: document.getElementById("emailcli").value,
                    celularcli: document.getElementById("celcli").value,
                    dataagendamento: databrasil,
                    horaagendamento: document.getElementById("timehorainicio").value,



                    agencia: {
                        id: document.getElementById("inputAg").value

                    }
                }

                var cabecalho = {
                    method: "POST",
                    body: JSON.stringify(objeto),
                    headers: {
                        "Content-type": "application/json"
                    }
                }

                fetch("https://backend-projetofinal1.herokuapp.com/novoagendamento", cabecalho)
                    .then(res => res.json())
                    .then(res => { 
                        document.getElementById("alertdata").innerHTML = 
                        "<div class='alert alert-success' role='alert'> Agendamento realizado com sucesso! </div>"
                        
                        window.location.reload(true);
                    })
                    .catch(err => { 
                        document.getElementById("alertdata").innerHTML = 
                        "<div class='alert alert-danger' role='alert'> Serviço indisponível no momento, tente mais tarde </div>";
                        //window.alert("ocorreu um erro") 
                    });

            } else {
                document.getElementById("alertdata").innerHTML =
                    "<div class='alert alert-danger' role='alert'> Data invalida </div>";
                document.getElementById("dateagenda").focus();

            }
        }
        else {
            document.getElementById("alertdata").innerHTML =
                "<div class='alert alert-danger' role='alert'> Selecione uma Agencia </div>";
            document.getElementById("inputAg").focus();

        }
    } else {
        document.getElementById("alertdata").innerHTML =
                "<div class='alert alert-danger' role='alert'> Coloque um email válido! </div>";
            document.getElementById("emailcli").focus();
    }

    } else {
        document.getElementById("alertdata").innerHTML =
            "<div class='alert alert-danger' role='alert'> Preencha todos os campos </div>";

    }
}

function preencheragencias(lista) {
    var saida = "<option value ='0'>Selecione uma agencia...</option>";

    for (cont = 0; cont < lista.length; cont++) {
        saida +=
            "<option value='" + lista[cont].id + "'>" + lista[cont].nomeAgencia + "</option>";
    }
    document.getElementById("inputAg").innerHTML = saida;
}

function carregaragencias() {
    fetch("https://projeto-java-final.herokuapp.com/agencia")
        .then(res => res.json())
        .then(res => preencheragencias(res));
}


function compareDates(date) {
    let parts = date.split('-'); // separa a data pelo caracter '/'
    let today = new Date();      // pega a data atual

    date = new Date(parts[0], parts[1] - 1, parts[2]); // formata 'date'

    // compara se a data informada é maior que a data atual
    // e retorna true ou false
    return date > today ? true : false;
}

function comparahorario(horarioinicio, horariofim){

    

}

function validaaegendamento() {
    var data = document.getElementById("dateagenda").value;
                var ano = data.substring(0, 4);
                var mes = data.substring(5, 7);
                var dia = data.substring(8, 10);

                var databrasil = dia + "/" + mes + "/" + ano
                
                var objeto = {
                    dataagendamento: databrasil,
                    horaagendamento: document.getElementById("timehorainicio").value,
                    agencia: {
                        id: document.getElementById("inputAg").value

                    }
                }

                var cabecalho = {
                    method: "POST",
                    body: JSON.stringify(objeto),
                    headers: {
                        "Content-type": "application/json"
                    }
                }

                fetch("https://projeto-java-final.herokuapp.com/validaagendamento", cabecalho)
                    .then(res => res.json())
                    .then(res => gravar())
                    .catch(err => { 
                        document.getElementById("alertdata").innerHTML = 
                        "<div class='alert alert-danger' role='alert'> Horário lotado, por favor escolha um diferente </div>";
                        document.getElementById("timehorainicio").focus();
                    });
}
