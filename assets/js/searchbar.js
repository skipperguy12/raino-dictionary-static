$(document).ready(function() {
  $("#proper").hide();
  $("#searchbar").unbind('keypress').keypress(function(e){
          if (e.which == 13) {
              $("#proper").hide();
              $("#text").empty();
              setTimeout(function(){
                $("#proper").show();
                $("#proper").addClass('animated fadeInUp');

                if (document.getElementById("searchbar").value == "ok") {
                  $("#text").append("Congratulations! You have learned the way of a new means of communication, a simpler one. Here is a challenge: ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok ok");
                } else {
                  $("#text").append("It appears you've spelled <span class=\"label label-danger\">" +  document.getElementById("searchbar").value + "</span> wrong, the proper way to spell it is <span class=\"label label-success\">ok</span>");
                }

              }, 0);
          }
  });
})
