





    $(function() {
        $(".image-animate").hover(
            function() {
                $(this).attr("src", "animated.gif");
            },
            function() {
                $(this).attr("src", "static.gif");
            }                         
        );                  
    });

