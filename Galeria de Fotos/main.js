$(document).ready(function(){
    
    $('header button').click(function() {
       $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
    })
})