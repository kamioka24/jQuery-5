$(function() {
        $('.box1').slideDown(3000, function() { //3秒かけて動く
            $('.box1').css({
                'background-color': '#0000FF',
                'width': '500px',
                'height': '100px'
            }).slideUp();
        });
    });