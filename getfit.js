// jQuery var we will use insted of the literal string inside 
// the ajax call 

//application id: 7cbf3fce
//application key: c33c9593adf94c5e7fdc564c7cd0b1ff
$(document).ready(function(){

var apiKey = "c33c9593adf94c5e7fdc564c7cd0b1ff";
var idAPI = "7cbf3fce";
var queryURL = "https://trackapi.nutritionix.com/v2/search/instant?query=pizza";
// asynchronous HTTP request


$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",
    headers: {
    "x-app-id": idAPI,
    "x-app-key": apiKey,
    "x-remote-user-id": 0
    }
}).then(function(response) {
    console.log(queryURL);
    console.log(response);

    // Add here AJAX call to get the exercise needed to burn 
    // console(response.RunTime);
});

});