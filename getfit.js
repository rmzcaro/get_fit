// jQuery var we will use insted of the literal string inside 
// the ajax call 

// application id: 7cbf3fce
// application key: c33c9593adf94c5e7fdc564c7cd0b1ff

$(document).ready(function () {

            var apiKey = "c33c9593adf94c5e7fdc564c7cd0b1ff";
            var idAPI = "7cbf3fce";

            var userInput;
            // EVENT LISTENER

            // The on click event that gets the users input 
            $(".image").on("click", function () {
                event.preventDefault();
                // Get the value associated with the button the user picked
                // REVIEW THIS 
                userInput = $(this).attr("name");
                console.log(userInput);

            // queryURL must be able to accept different entries. 
            // CURRENTLY IT ONLY ACCEPTS 1 QUERY 
            var queryURL = "https://trackapi.nutritionix.com/v2/search/instant?query=" + userInput;
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
                // console.log(response.branded[0].food_name);
                // console.log(response.branded[0].nf_calories);

                // creates var for storing response 
                var food_name = response.common[0].food_name;
                var img = response.common[0].photo.thumb;
                var servingQty = response.common[0].serving_qty;
                var servingUnit = response.common[0].serving_unit;
                console.log("food ="+ food_name,"img ="+img, "servingQty ="+servingQty, "servingUnit ="+ servingUnit);

                $.ajax({
                    url: queryURL1,
                    data: {
                        "query": food_name,
                        "num_servings": 1,
                        "aggregate": food_name,
                        "line_delimited": false,
                        "use_raw_foods": true,
                    },
                    method: "POST",
                    ContentType: "application/json",
                    headers: {
                        "x-app-id": idAPI,
                        "x-app-key": apiKey,
                        "x-remote-user-id": 0
                    }

                }).then(function (nutrition) {
                    console.log(nutrition);

                    //WE NEED TO CONSOLE LOG CALORIES HERE 
                    //save variable for calories
                    var calories = nutrition.foods[0].metadata.nf_calories;
                    console.log(calories);

                });
        });


            });

            //DO WE NEED TO ADD ERROR HANDLER 

    });