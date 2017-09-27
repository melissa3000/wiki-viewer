"use strict";

$(document).ready(function() {

// Hard coded for testing purposes
var searchTerm = "apple";
var data;

var url = "https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=" + searchTerm + "&callback=?";


$.getJSON(url, function(data) {
  console.log(data);
  var resultTitles = data[1];
  // console.log("resultTitles: " + resultTitles);
  var resultDescription = data[2];
  // console.log("resultDescription: " + resultDescription);
  // console.log(data[1][0]);
  var resultURL = data[3];

  for (var i = 0; i < resultTitles.length; i ++) {
    var list = "";
    // var titles = document.getElementById("demo");
    // titles.innerHTML += resultTitles[i];
    list = "<a href="+resultURL[i]+"><li>"+resultTitles[i]+"<br>"+resultDescription[i]+"</li></a><br>";
    $("#demo").append(list);
  }
});


// var resultTitles = data[1];
// console.log("resultTitles: " + resultTitles);





});