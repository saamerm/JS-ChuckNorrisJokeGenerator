$("document").ready(function() {
  // Loads the initial quote - without pressing the button
  getQuotes();
  
  // Loads quotes as user wishes on clicking the button
  $("#get-quote").on("click", getQuotes);
});

function getQuotes() {
  // To avoid using JQuery, you can use this https://stackoverflow.com/questions/3229823/how-can-i-pass-request-headers-with-jquerys-getjson-method
  $.getJSON("https://api.icndb.com/jokes/random", function(a) {
    //var json = JSON.stringify(a);
    if (a.type == "success") {
      var joke = a.value["joke"];
        $("#quote").html(joke);    
      console.log(a);
    }
    
  });
}