
    // JQUERY

$(document).ready(function()
{
    $("#button1").click(function(){
        $(".carre").addClass("carre-plein");
        $(".rond").addClass("rond-plein");
        $(".losange").addClass("losange-plein");
    });

    $("#button2").click(function(){
        $(".carre").removeClass("carre-plein");
        $(".rond").removeClass("rond-plein");
        $(".losange").removeClass("losange-plein");

    });
    $(".rond").click(function(){
    {$(this).toggleClass("rond-plein");}
    });

    $(".range1 .carre").click(function(){
    {$(this).toggleClass("carre-plein");}
    {$(".range1 .rond").toggleClass("carre-plein");}
    });

    $(".range2 .carre").click(function(){
    {$(this).toggleClass("carre-plein");}
    {$(".range2 .rond").toggleClass("carre-plein");}
    });

    $(".range4 .carre").click(function(){
    {$(this).toggleClass("carre-plein");}
    {$(".range4 .rond").toggleClass("carre-plein");}
    });

    $(".range5 .carre").click(function(){
    {$(this).toggleClass("carre-plein");}
    {$(".range5 .rond").toggleClass("carre-plein");}
    });

    $(".losange").click(function(){
    {$(this).toggleClass("losange-plein");}
    {$(".range3 .rond").toggleClass("carre-plein");}
    {$(".col3").toggleClass("carre-plein");}

    });
    
 });