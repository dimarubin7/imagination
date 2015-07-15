$(document).ready(function(){
    $("#forPopup").click(function(){
        $(".over, .popup, .close").show();
    });
    $(".close").click(function(){
        $(".over, .popup, .close").hide(2000).animate({width: "100px", height: "100px;"});;
    });
});