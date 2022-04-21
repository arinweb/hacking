function app() {
  var girdi_1 = `
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
  <meta name="theme-color" content="BARCOLOR">
  <!--Meta Verileri-->
  <link rel="icon" type="image/png" sizes="16x16" href="FAVİCON">
  <link rel="stylesheet" href="style.css" type="text/css" media="all" />
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnweb.netlify.app/script.js"></script>
  <title>BAŞLIK</title>
  `;
  $("body").html("");
  var html_text = `
  <h1>Merhaba Dünya</h1>
  `;
  $("body").html(girdi+table_text);

}

$(document).ready(function() {
  //app();
  setTimeout(app,3000);
});