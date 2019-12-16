$(".row").each(function(){
    var width = $(this).find("img").width();
    $(".overlay").width(width);
    var height = $(this).find("img").height();
    $(".overlay").height(height);
});
$( window ).resize(function() {
    $(".row").each(function(){
        var width = $(this).find("img").width();
        $(".overlay").width(width);
        var height = $(this).find("img").height();
        $(".overlay").height(height);
    });
});
 $( "logo" ).hover(function() {
 $( this ).fadeOut( 1000 );
 $( this ).fadeIn( 1000 );
})
