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
          $("#history-view").show();
          $("#dice-view").hide();
        });


        $("#dice-button").click(function(){
          $("#history-view").hide();
          $("#dice-view").show();
        });


        $("#d4-button").click(function(){
        let roll = Math.floor((Math.random() * 4) + 1);
          $("#history-view-list").append("<li>D4 Roll = " + roll + "</li><br/>");
           $("#roll-result").html(roll);
        });


        $("#d6-button").click(function(){
          let roll = Math.floor((Math.random() * 6) + 1);
          $("#history-view-list").append("<li>D6 Roll = " + roll + "</li><br/>");
          $("#roll-result").html(roll);
        });


        $("#d8-button").click(function(){
          let roll = Math.floor((Math.random() * 8) + 1);
            $("#history-view-list").append("<li>D8 Roll = " + roll + "</li><br/>");
            $("#roll-result").html(roll);
        });


        $("#d10-button").click(function(){
          let roll = Math.floor((Math.random() * 10) + 1);
            $("#history-view-list").append("<li>D10 Roll = " + roll + "</li><br/>");
            $("#roll-result").html(roll);
        });


        $("#d12-button").click(function(){
          var roll = Math.floor((Math.random() * 12) + 1);
            $("#history-view-list").append("<li>D12 Roll = " + roll + "</li><br/>");
            $("#roll-result").html(roll);
        });


        $("#d20-button").click(function(){
          var roll = Math.floor((Math.random() * 20) + 1);
            $("#history-view-list").append("<li>D20 Roll = " + roll + "</li><br/>");
            $("#roll-result").html(roll);
        });


  });
});
