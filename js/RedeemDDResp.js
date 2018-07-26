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


function cart_summary(){
    $("#sum3").css("display", "block");
    $("#redeemHead2").css("display","none");
    $("#redeemHead1").css("display","block");
      $("#click").css("display","none"); 
      $("#sum1").css("display","none");
    
        
}



function red(){
    //window.location.href = "#Addme";
    if ($(window).width() < 960){
        $("#cartchange").attr('src', '../../img/cart2.png');
        $("#cartFloatingIcon").addClass("show-on-small");
        $("#cartFloatingIcon").addClass("show-on-med");
        $("#cartFloatingIcon").addClass("hide-on-large");
        $("#bell").css("display","block");
       // $("#sum3").css("display", "block");
      //  $("#click").css("display","none"); 
       // $("#sum1").css("display","none");
       
    }
    else{
      // $("#Addme").addClass("bg");
      // $("#Addme").removeClass("colr");
      // $("#addcart").addClass("whiteColor");
      // $("#addcart").removeClass("colr");
      // $("#Addme").css("color","white");
       
        $("#sum1").css("display","none");
        $("#sum2").css("display", "block");
        $("#summarydiv").css("height", "710px");
    }
}


$(".addme0").click(function () {
   // alert("aasd");
    //$("#sum1").css("display", "none");
    //$("#sum2").css("display", "block");
    $(".addcart").html("Added to Cart");
    
})


$(".addme1").click(function () {
    // alert("aasd");
     //$("#sum1").css("display", "none");
     //$("#sum2").css("display", "block");
     $(".addcart1").html("Added to Cart");
     
 })


 $(".addme2").click(function () {
    // alert("aasd");
     //$("#sum1").css("display", "none");
     //$("#sum2").css("display", "block");
     $(".addcart2").html("Added to Cart");
     
 })

 $(".addme3").click(function () {
    // alert("aasd");
     //$("#sum1").css("display", "none");
     //$("#sum2").css("display", "block");
     $(".addcart3").html("Added to Cart");
     
 })

 $(".addme4").click(function () {
    // alert("aasd");
     //$("#sum1").css("display", "none");
     //$("#sum2").css("display", "block");
     $(".addcart4").html("Added to Cart");
     
 })

 $(".addme5").click(function () {
    // alert("aasd");
     //$("#sum1").css("display", "none");
     //$("#sum2").css("display", "block");
     $(".addcart5").html("Added to Cart");
     
 })

$('#Addme').mouseup(function (event) {
    switch (event.which) {
        case 1: 
            $("#inputIDCart_1").attr("placeholder", "1");
            break;
    }
});


function confirm3_redir(){
    $("#confirm3").css("display","none");
    $("#confirm2").css("display","block");
    $("#confirm1").css("display","none");
}


function confirm2_redir(){
    if ($(window).width() < 960) {
        $("#click").css("display","none");
        $("#confirm1").css("display","none");
        $("#confirm2").css("display","block");
        $("#confirm3").css("display","none");
            $("#redem_success").removeClass("offset-3");
           $("#redem_successpara").removeClass("offset-1");
         
     }
     else {
        $("#confirm1").css("display","none");
        $("#confirm2").css("display", "block");
        $("#confirm3").css("display", "none");
     }

}

function gold_redir(){
    $("#gold_div").css("display","block");
    $("#silver_div").css("display","none");
    $("#gold_product_heading").html("Gold Products");
    $("#selectgold").css("background","#296EFB");
    $("#selectgold").css("color","white");
    $("#selectsilver").css("background","white");
    $("#selectsilver").css("color","#296EFB");
    $("#selectgold2").css("background","#296EFB");
    $("#selectgold2").css("color","white");
    $("#selectsilver2").css("background","white");
    $("#selectsilver2").css("color","#296EFB");
}

function silver_redir(){
    $("#gold_div").css("display","none");
    $("#silver_div").css("display","block");
    $("#gold_product_heading").html("Silver Products");
     $("#selectsilver").css("color","white");
    $("#selectsilver").css("background","#296EFB");
    $("#selectgold").css("background","white");
    $("#selectgold").css("color","#296EFB");
    $("#selectsilver2").css("color","white");
    $("#selectsilver2").css("background","#296EFB");
    $("#selectgold2").css("background","white");
    $("#selectgold2").css("color","#296EFB");
}

