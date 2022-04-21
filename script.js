function app() {
  var girdi = `
  <!--Meta Verileri-->
  <meta charset="UTF-8">
  <meta name="author" content="SİTE YAPIMCISI HAKKINDA">
  <meta name="abstract" content="SİTE ÖZETİ">
  <meta name="description" content="SİTE GENİŞ BİLGİ">
  <meta name="copyright" content="TELİF CÜMLESİ">
  <meta name="revisit-after" content="SİTE GÜNCELLENME SIKLIĞI ör: 7 days">
  <meta http-equiv="content-language" content="tr">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <meta name="theme-color" content="#212121">
  <!--Meta Verileri-->
  <link rel="icon" type="image/png" sizes="16x16" href="FAVİCON">
  <link rel="stylesheet" href="https://cdnweb.netlify.app/style.css" type="text/css" media="all" />
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnweb.netlify.app/script.js"></script>
  <title>BAŞLIK</title>
  `;
  $("head").html(girdi);
  $("body").html("");
  var html_text = `
  <header>
  <h1 style="color:white;font-size:50px;">Header</h1>
  </header>
  <style>
  body{
  background:orange;
  }
  </style>
  `;
  $("body").load(html_text);
  //window.stop();

}

$(document).ready(function() {
  app();
  //setTimeout(app,3000);
});