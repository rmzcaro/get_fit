// jQuery var we will use insted of the literal string inside 
// the ajax call 

//application id: 7cbf3fce
//application key: c33c9593adf94c5e7fdc564c7cd0b1ff
$(document).ready(function () {

            var apiKey = "c33c9593adf94c5e7fdc564c7cd0b1ff";
            var idAPI = "7cbf3fce";

            //EVENT LISTENER

            // The on click event that gets the users input 
            $(".image").on("click", function () {
                event.preventDefault();
                // Get the value associated with the button the user picked
                // REVIEW THIS 
                var userInput = $(this).val();
            });

            // queryURL must be able to accept different entries. 
            // CURRENTLY IT ONLY ACCEPTS 1 QUERY 
            var queryURL = "https://trackapi.nutritionix.com/v2/search/instant?query=hotdog";
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

                //After the data comes back from the API
            }).then(function (response) {
                console.log(response);
                console.log(response.branded[0].food_name);
                console.log(response.branded[0].nf_calories);

                // creates var for storing response 
                var food_name = response.common[0].food_name;
                var img = response.common[0].photo.thumb;
                var servingQty = response.common[0].serving_qty;
                var servingUnit = response.common[0].serving_unit;

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
                    }

                });

                // push info into firebase 
                database.ref().push(food_name);
                database.ref().push(img);
                database.ref().push(servingQty);            
                database.ref().push(servingUnit);

                alert("Food added!");
                // name: name, 

                // });

                // return the calories 

                // show on browser

            });

        });