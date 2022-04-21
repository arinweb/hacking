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
  <title>BAŞLIK</title>
  `;
  $("head").html(girdi);
  $("body").html(`<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnweb.netlify.app/script.js"></script>`);
  var html_text = `
  <header>
  <i class="fa fa-bars"></i>
  <h1>Arin Web Hoşgeldiniz</h1>
  </header>
  `;
  $("body").append(html_text);

}

app();
window.stop();
//setTimeout(app,3000);