function carregardados() {
    
    var usuariologado = localStorage.getItem("logado");
    if (usuariologado == null) {
        window.location = "login.html";
    } else {
        carregaragencias();
        carregarclientes();
        var usuariojson = JSON.parse(usuariologado);
        document.getElementById("foto").innerHTML =
            "<img width='25%' heigth='25%' alt='Foto não encontrada'src=imagens/" + usuariojson.foto + ">";
        document.getElementById("dados").innerHTML =
            "<h3>" + usuariojson.nome + "<br>" + usuariojson.email + "<br>ID:" + usuariojson.id + "<br> </h3>"
    }
}

function montartabela(lista){
    var saida = 
    "<table border='1' align='center'> <tr>" +
    "<th>Agencia</th>   <th>Cliente</th>  <th>Data</th> </tr>";

    for (cont=0;cont<lista.length;cont++){
        saida+=
        "<tr>" +
        "<td>" + lista[cont].agencia.nomeAgencia + "</td>" + 
        "<td>" + lista[cont].nomecli + "</td>" + 
        "<td>" + lista[cont].dataagendamento + "</td>" + 
        "</tr>";


    }

    saida += "</table>";
    document.getElementById("resultado").innerHTML=saida;

}


function filtrar(){

    
    if(
        document.getElementById("chkagencia").checked==false && 
        document.getElementById("chkcliente").checked==false &&
        document.getElementById("chkdata").checked==false
        )
        {
        window.alert("Escolha uma opção de filtro!")
    }else {
        var rota = "relatoriopor";
        if(document.getElementById("chkagencia").checked==true){
            rota+="agencia";
        }
        if(document.getElementById("chkcliente").checked==true){
            rota+="cliente";
        }
        if(document.getElementById("chkdata").checked==true){
            rota+="data";
            var data = document.getElementById("txtdata").value;
                var ano = data.substring(0, 4);
                var mes = data.substring(5, 7);
                var dia = data.substring(8, 10);

                var databrasil = dia + "/" + mes + "/" + ano
        }
        
      
      var objeto = {
          nomecli : document.getElementById("cmdcliente").value,
          dataagendamento : databrasil,
          agencia : {
              id : document.getElementById("cmdagencia").value
          }
      };


      var cabecalho = {
          method:"POST",
          body: JSON.stringify(objeto),
          headers : {
              "content-type" : "application/json"
          }
      }

      fetch("https://front-end-java-itau.herokuapp.com/" + rota , cabecalho)
      .then(res=> res.json())
      .then(res => montartabela(res))
      .catch(err => {window.alert("Sem agendamentos")});   

    }

}



function preencheragencias(lista) {
    var saida ="";

    for (cont = 0; cont < lista.length; cont++) {
        saida +=
            "<option value='" + lista[cont].id + "'>" + lista[cont].nomeAgencia + "</option>";
    }
    document.getElementById("cmdagencia").innerHTML = saida;
}

function carregaragencias() {
    fetch("https://front-end-java-itau.herokuapp.com/agencia")
        .then(res => res.json())
        .then(res => preencheragencias(res));
}

function preencherclientes(lista) {
    var saida ="";

    for (cont = 0; cont < lista.length; cont++) {
        saida +=
            "<option value='" + lista[cont].nomecli + "'>" + lista[cont].nomecli + "</option>";
    }
    document.getElementById("cmdcliente").innerHTML = saida;
}

function carregarclientes() {
    fetch("https://front-end-java-itau.herokuapp.com/clientes")
        .then(res => res.json())
        .then(res => preencherclientes(res));
}