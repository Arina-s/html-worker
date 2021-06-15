jQuery(function () {
    $('#send-button').click(function () {
        let value = $('textarea').val()
        console.log(value)
        $('.view').empty().append(value)
    })
    $('#dark').on('click', function () {
        $('body').css('backgroundColor', '#303237')
        $('body').css('color', '#ffffff')
        $('.container').css('backgroundColor', '#fff')
        $('.container').css('color', '#000000')
    })
    $('#light').on('click', function () {
        $('body').css('backgroundColor', '#ffffff')
        $('body').css('color', '#303237')
    })
    $('#color').on('click', function () {
        let color1 = Math.floor(Math.random() * (999999-100000 + 1) + 10000)
        let color2 = Math.floor(Math.random() * (999999-100000 + 1) + 10000)
        $('body').css('backgroundColor', '#' + color1)
        $('body').css('color', '#' + color2)
        $('.container').css('backgroundColor', '#fff')
        $('.container').css('color', '#000000')
    })
})
