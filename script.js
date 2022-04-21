//Test
//alert("Merhaba Dünya");
function app() {
  //$(".has-text-centered #sumstar").html("20894383");
  var girdi = `
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnweb.netlify.app/script.js"></script>
  `;
  $("body").html(girdi);
  var html_text = `
  <h1>Merhaba Dünya</h1>
  `;
  $("body").html(girdi+table_text);

}

$(document).ready(function() {
  app();
});