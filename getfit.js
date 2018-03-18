// jQuery var we will use insted of the literal string inside 
// the ajax call 

//application id: 7cbf3fce
//application key: c33c9593adf94c5e7fdc564c7cd0b1ff

$(document).ready(function() {

var title = "nutritionix-test";
var queryURL = "https://nutritionix.com/api/index.php?method=request.get&accesskey=c33c9593adf94c5e7fdc564c7cd0b1ff";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    console(response.RunTime);
}); 

});