$('section').on('click', function () {
    $(this).children().slideToggle().end().siblings().children().slideUp()
})