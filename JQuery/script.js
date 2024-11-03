$(function() {

    isRotate = true;

    $('.btn').click(function() {

        if (!isRotate) {
            $(this).css({
                'transform': 'rotate(0deg)',
                'transition': 'transform .3s ease',
            })
        } else {
            $(this).css({
                'transform': 'rotate(90deg)',
                'transition': 'transform .3s ease',
            })
        }
        isRotate = !isRotate;
        

        $('.box-1').slideToggle(500);
    })

    $('.small-img img').click(function() {
        var small_src = $(this).attr('src')
        
        if ($('.big-img img').attr('src') !== small_src){
            $('.big-img img').fadeOut(10, function() {
                $(this).attr('src', small_src).fadeIn(1000);
            }) 
        }
        
    })

    $('.small-img img').click(function() {
        $('.small-img img').fadeTo(200, 1)
        $(this).fadeTo(200, 0.6)
    })
    
    
})

