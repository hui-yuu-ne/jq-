$('div').css({
    height: innerHeight
})
$('li').on('click', function () {
    $('html').animate({scrollTop:$('div').eq($(this).index()).index()*$('div').height()+'px'})
    console.log($('div').eq($(this).index()).index()*$('div').height());
})