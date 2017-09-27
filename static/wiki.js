"use strict";

$(document).ready(function() {


$("#userSearch").on('click', function() {

  var searchTerm = document.getElementById("search").value;
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=" + searchTerm + "&callback=?";

   $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      success: function(data, textStatus, jqXHR) {
        // console.log(data);
        var resultTitles = data[1];
        var resultDescription = data[2];
        var resultURL = data[3];

        for (var i = 0; i < resultTitles.length; i ++) {
          var list = "";
          list = '<a target="_blank" href='+resultURL[i]+"><li><b>"+resultTitles[i]+"</b><br>"+resultDescription[i]+"</li></a><br>";
          $("#wikiLinks").append(list);
        }
      }
    });
});




});