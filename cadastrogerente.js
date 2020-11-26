function gravar() {

    if (document.getElementById("txtnome").value.length > 0 
        && document.getElementById("txtracf").value.length > 0 
        && document.getElementById("txtemail").value.length > 0
        && document.getElementById("txtsenha").value.length > 0
        && document.getElementById("txtsenhaconfirm").value.length > 0){

            if(document.getElementById("txtsenha").value==document.getElementById("txtsenhaconfirm").value){

                var objeto = {
                    nome: document.getElementById("txtnome").value,
                    racf: document.getElementById("txtracf").value,
                    email: document.getElementById("txtemail").value,
                    senha: document.getElementById("txtsenha").value,
                    foto: document.getElementById("txtfoto").value


                }

                var cabecalho = {
                    method: "POST",
                    body: JSON.stringify(objeto),
                    headers: {
                        "Content-type": "application/json"
                    }
                }

                fetch("https://projeto-java-final.herokuapp.com/novogerente", cabecalho)
                    .then(res => res.json())
                    .then(res => { window.alert("Gravado com sucesso") })
                    .catch(err => { window.alert("ocorreu um erro") });
                    window.location = "login.html";

            } else{
                document.getElementById("alertdata").innerHTML =
                "<div class='alert alert-danger' role='alert'> as senhas não são iguais </div>";
                document.getElementById("txtsenha").focus();
            }
        
        

    } else {
        document.getElementById("alertdata").innerHTML =
            "<div class='alert alert-danger' role='alert'> Preencha todos os campos </div>";

    }
}

