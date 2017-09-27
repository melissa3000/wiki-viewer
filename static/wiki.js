"use strict";

$(document).ready(function() {


// Hard coded for testing purposes
// var x = document.getElementById("search").value;
// console.log("x: " + x);
// var searchTerm = x;
// // var searchTerm = "apple";
// console.log("searchTerm: " + searchTerm);
// var data;




$("#userSearch").on('click', function() {

var searchTerm = document.getElementById("search").value;
var url = "https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=" + searchTerm + "&callback=?";

  // searchTerm = document.getElementById("search").value;

//   $.getJSON(url, function(data) {
//     console.log(data);
//     var resultTitles = data[1];
//     // console.log("resultTitles: " + resultTitles);
//     var resultDescription = data[2];
//     // console.log("resultDescription: " + resultDescription);
//     // console.log(data[1][0]);
//     var resultURL = data[3];

//     for (var i = 0; i < resultTitles.length; i ++) {
//       var list = "";
//       list = "<a href="+resultURL[i]+"><li>"+resultTitles[i]+"<br>"+resultDescription[i]+"</li></a><br>";
//       $("#demo").append(list);
//     }
//   });
// });

   $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      // data: data,
      success: function(data, textStatus, jqXHR) {
        console.log(data);
        // var markup = data.parse.text["*"];
        // console.log("markup: " + markup);
      }
    });


});


});