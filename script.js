function app() {
  var girdi = `
  <!--Meta Verileri-->
  <meta charset="UTF-8">
  <meta http-equiv="content-language" content="tr">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <meta name="theme-color" content="#212121">
  <!--Meta Verileri-->
  <link rel="stylesheet" href="https://cdnweb.netlify.app/style.css" type="text/css" media="all" />
  <title>Arin Web</title>
  `;
  $("head").html(girdi);
  var html_text = `
  
  <div class="card-sites">
  <h1>Hoşgeldiniz</h1>
  </div>
  `;
  $("body").html(html_text);
  $("body").append(`<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`);
}

app();
//setTimeout(app,3000);