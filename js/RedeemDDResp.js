$(document).ready(function () {
    setInterval(function () {
        if ($(window).width() <= "1199") {
            $("#dotResp_1").html(". . . . . . . . . . . . . . . ");
            $("#dotResp_2").html(". . . . . . . . . . . . . . . . . . . . . . ");
            $("#dotResp_3").html(". . . . . . . . . . . . . .  ");
            $("#dotResp_4").html(". . . . . . . . . . . . . . . . . . . . . . . . ");
            $("#dotResp_5").html(". . . . . . . . . . . . . . . . . . . .");
        }
        else {
            $("#dotResp_1").html(". . . . . . . . . . . . . . . . . . . . ");
            $("#dotResp_2").html(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
            $("#dotResp_3").html(". . . . . . . . . . . . . . . . . . . ");
            $("#dotResp_4").html(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");
            $("#dotResp_5").html(". . . . . . . . . . . . . . . . . . . . . . . . . . .  ");
        }
    }, 10);

});



$(document).ready(function () {
    setInterval(function () {
        if ($(window).width() <= "1199") {
            $("#dotResp_6").html(". . . . . . . . . . . .");
            $("#dotResp_7").html(". . . . . . . . . . . . . . . . . . . .");
            $("#dotResp_8").html(". . . . . . . . .");
            $("#dotResp_9").html(". . . . . . . . . . . . . . . . . . ");
            $("#dotResp_10").html(". . . . . . . . . . . . . . . . . ");
        }

        if ($(window).width() <= "768") {
            $("#dotResp_6").html(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");
            $("#dotResp_7").html(". . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");
            $("#dotResp_8").html(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  ");
            $("#dotResp_9").html(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
            $("#dotResp_10").html(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
        }

    

        else {
            $("#dotResp_6").html(". . . . . . . . . . . . . . . .");
            $("#dotResp_7").html(". . . . . . . . . . . . . . . . . . . . . . . . . . . . ");
            $("#dotResp_8").html(". . . . . . . . . . . . . . .");
            $("#dotResp_9").html(". . . . . . . . . . . . . . . . . . . . . . . . . . . ");
            $("#dotResp_10").html(". . . . . . . . . . . . . . . . . . . . . . . . . . ");
        }
    }, 10);

});







function red(){
    window.location.href = "#Addme";
    if ($(window).width() < 960){
        $("#sum3").css("display", "block");
        $("#click").css("display","none"); 
        $("#sum1").css("display","none");
        
        
    }
    else{
        $("#Addme").addClass("bg");
        $("#Addme").removeClass("colr");
        $("#addcart").addClass("whiteColor");
        $("#addcart").removeClass("colr");
        $("#Addme").css("color","white");
        $("#sum1").css("display","none");
        $("#sum2").css("display", "block");
    }
}

function confirm2_redir(){
    if ($(window).width() < 960) {
        $("#click").css("display","none");
        $("#confirm1").css("display","none");
        $("#confirm2").css("display","block");
            $("#redem_success").removeClass("offset-3");
           $("#redem_successpara").removeClass("offset-1");
         
     }
     else {
        $("#confirm1").css("display","none");
    $("#confirm2").css("display","block");
     }

}

function gold_redir(){
    $("#gold_div").css("display","block");
    $("#silver_div").css("display","none");
    $("#gold_product_heading").html("Gold Products");
}

function silver_redir(){
    $("#gold_div").css("display","none");
    $("#silver_div").css("display","block");
    $("#gold_product_heading").html("Silver Products");
}

 