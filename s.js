document.querySelector("head").innerHTML = `
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
`;
function app() {
  var girdi = `
  <!--Meta Verileri-->
  <meta charset="UTF-8">
  <meta http-equiv="content-language" content="tr">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <meta name="theme-color" content="deepskyblue">
  <!--Meta Verileri-->
  <link rel="stylesheet" href="https://84.netlify.app/style.css" type="text/css" media="all" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<title>Arin Web</title>
  `;
  $("head").prepend(girdi);
  var html_text = `
  
  <div class="card-sites">
  <i class="fa-brands fa-discord discord-icon"></i>
  <h1>Arin Web</h1>
  <img class="icon-arin" src="https://84.netlify.app/favicon.png"/>
   <a href="https://arinweb.epizy.com">Arin Web Sitesine Git</a>
  <a href="https://instagram.com/arin_web">İnstagram</a>
  <a href="https://discord.gg/5tCwE4qtUU">Discord Davet Bağlantısına Git</a>
  <b>Discord</b>
  </div>
  `;
  $("body").html(html_text);
  $("body").append(`<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`);
  //window.location.href="https://arinweb.epizy.com";
}
  //alert('Arin Web');
app();
//setTimeout(app,3000);
