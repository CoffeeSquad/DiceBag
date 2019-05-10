// Setup dependencies
requirejs.config({
  baseUrl: "js",
  paths: {
    "jquery": ["https://code.jquery.com/jquery-2.1.4.min", "lib/jquery-2.1.4"],
    "jquery-mobile": ["https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min", "lib/jquery-mobile-1.4.5"],
  },
});

// App logic
requirejs(["jquery", "jquery-mobile"], function() {
  $(document).ready(function() {
    console.log("DOM Ready");


        $("#history-button").click(function(){
          $("#dice-view").hide();
          $("#history-view").show();
        });


        $("#dice-button").click(function(){
          $("#history-view").hide();
          $("#dice-view").show();
        });


  });
});
