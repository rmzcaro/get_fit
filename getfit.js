

  $(document).ready(function(){
    alert('sup');
  });

  window.onload(alert('hello world!'));
// jQuery var we will use insted of the literal string inside 
// the ajax call 

//application id: 7cbf3fce
//application key: c33c9593adf94c5e7fdc564c7cd0b1ff
$(document).ready(function () {

            var apiKey = "c33c9593adf94c5e7fdc564c7cd0b1ff";
            var idAPI = "7cbf3fce";
            var queryURL = "https://trackapi.nutritionix.com/v2/search/instant?query=apple";
            var queryURL1 = "https://trackapi.nutritionix.com/v2/natural/nutrients";
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
            }).then(function (response) {
                console.log(response);
                console.log(response.branded[0].food_name);
                console.log(response.branded[0].nf_calories);
                $.ajax({
                    url: queryURL1,
                    data: { 
                        "query": "apple",
                        "num_servings": 1,
                        "aggregate": "apples",
                        "line_delimited": false,
                        "use_raw_foods": true,
                      },
                    method: "POST",
                    dataType: "application/json",
                    headers: {
                        "x-app-id": idAPI,
                        "x-app-key": apiKey,
                        "x-remote-user-id": 0

                        // console.log(queryURL1);
                        // console.log(response);
                     

                    }

                    // Add here AJAX call to get the exercise needed to burn 
                    // console(response.RunTime);
                });

            });

        });
