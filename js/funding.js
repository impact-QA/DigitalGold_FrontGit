$(document).ready(function () {
    setInterval(function () {
        if ($(window).width() <= "993") {
            $("#creditCard").attr("onclick", "creditCard_redir()");
            $("#bankAccount").attr("onclick", "bankAccount_redir()");
            $("#wireTransfer").attr("onclick", "wireTransfer_redir()");
        }
        else {
            $("#creditCard").removeAttr("onclick");
            $("#bankAccount").removeAttr("onclick");
            $("#wireTransfer").removeAttr("onclick");
        }
    }, 10)
});

function creditCard_redir() {
    window.location.href = "#credit";
    $("#mainbody").css("display", "none");
    $("#credit").css("display", "block");
}

function bankAccount_redir() {
    window.location.href = "#bank";
    $("#mainbody").css("display", "none");
    $("#bank").css("display", "block");
}

function wireTransfer_redir() {
    window.location.href = "#wire";
    $("#mainbody").css("display", "none");
    $("#wire").css("display", "block")
}

function addCard_redir(){
    window.location.href = "#xd";
    $("#credit").css("display", "none");
    $("#xd").css("display", "block");
}

function debit_page_redir(){
    window.location.href = "#debitPage";
    $("#usd").css("display", "none");
    $("#debitPage").css("display", "block");
    $("#table1").css("display", "block");
    $("#recent").css("display", "block");
}


function debit_page_redir2(){
    window.location.href = "#debitPage2";
   
 //   $("#hideme").css("display", "none");
  $("#xd").css("display", "none");
    $("#debitPage2").css("display", "block");
    $("#table1").css("display", "block");
    $("#recent").css("display", "block");
} 


function wire_page_redir(){
    window.location.href = "#wirePage";
    $("#usd").css("display", "none");
    $("#wirePage").css("display", "block");
    $("#table1").css("display", "block");
    $("#recent").css("display", "block");
}

function wire_page_redir2(){
    window.location.href = "#wirePage2";
   
 //   $("#hideme").css("display", "none");
  $("#wire").css("display", "none");
    $("#wirePage2").css("display", "block");
    
} 

function bank_page_redir(){
    window.location.href = "#debitPage";
    $("#usd").css("display", "none");
    $("#debitPage").css("display", "block");
    
}

function bank_page_redir2(){
    window.location.href = "#debitPage2";
   
    //   $("#hideme").css("display", "none");
     $("#bank").css("display", "none");
       $("#debitPage2").css("display", "block");
      
}


    function changeDropDown1() {
        $("#bankAccountDropDown").html($("#account_dd1").html());
                                       
    }

    function changeDropDown2() {
        $("#bankAccountDropDown").html($("#account_dd2").html());
    }

    function changeCreditDD1() {
        $("#creditCardDropDown").html($("#changeCreditDD1").html());

    }
    function changeCreditDD2() {
        $("#creditCardDropDown").html($("#changeCreditDD2").html());
    }



    $(document).ready(function () {
        $("#bankAccount").click(function () {
            $("#defaultLoading_div").css("display", "none");
            $("#bankAccount_div").css("display", "block");
            $("#creditCard_div").css("display", "none");
            $("#wireTransfer_div").css("display", "none");
            $("#payPal_div").css("display", "none");

            $("#bankAccount").addClass("active-div");
            $("#creditCard").removeClass("active-div");
            $("#wireTransfer").removeClass("active-div");
            $("#paypal").removeClass("active-div");

            $("#bankAccount").removeClass("txt-colr-form-opacity-30");            
            $("#creditCard").addClass("txt-colr-form-opacity-30");
            $("#wireTransfer").addClass("txt-colr-form-opacity-30");
            $("#paypal").addClass("txt-colr-form-opacity-30");

            $("#bankAccount").children().children().attr("src", "../../img/blue-bank-icon_white.png");
            $("#creditCard").children().children().attr("src", "../../img/credit-icon_grey.png");
            $("#wireTransfer").children().children().attr("src", "../../img/wire-transfer-icon_grey.png");
            $("#paypal").children().children().attr("src", "../../img/paypal-icon_grey.png");

            $("#bankAccount").children().children().removeClass("white-lite");
            $("#creditCard").children().children().addClass("white-lite");
            $("#wireTransfer").children().children().addClass("white-lite");
            $("#paypal").children().children().addClass("white-lite");

            //edited by akash
            $("#bankAccount").children().children().removeClass("black-lite");
            $("#creditCard").children().children().removeClass("black-lite");
            $("#wireTransfer").children().children().removeClass("black-lite");
            $("#paypal").children().children().removeClass("black-lite");




        });


    $("#creditCard").click(function () {
        $("#defaultLoading_div").css("display", "none");
    $("#bankAccount_div").css("display", "none");
                    $("#creditCard_div").css("display", "block");
                    $("#wireTransfer_div").css("display", "none");
                    $("#payPal_div").css("display", "none");

                    $("#bankAccount").removeClass("active-div");
                    $("#creditCard").addClass("active-div");
                    $("#wireTransfer").removeClass("active-div");
                    $("#paypal").removeClass("active-div");

                    $("#creditCard").removeClass("txt-colr-form-opacity-30");
                    $("#bankAccount").addClass("txt-colr-form-opacity-30");
                    $("#wireTransfer").addClass("txt-colr-form-opacity-30");
                    $("#paypal").addClass("txt-colr-form-opacity-30");
        

                    //$("#creditCard").children().children().removeClass("iconBlue");
                    //$("#creditCard").children().children().children().children().removeClass("black-lite");


                    $("#bankAccount").children().children().attr("src", "../../img/blue-bank-icon_grey.png");
                    $("#creditCard").children().children().attr("src", "../../img/credit-icon_white.png");
                    $("#wireTransfer").children().children().attr("src", "../../img/wire-transfer-icon_grey.png");
                    $("#paypal").children().children().attr("src", "../../img/paypal-icon_grey.png");

                    $("#bankAccount").children().children().addClass("white-lite");
                    $("#creditCard").children().children().removeClass("white-lite");
                    $("#wireTransfer").children().children().addClass("white-lite");
                    $("#paypal").children().children().addClass("white-lite");

                });

                $("#wireTransfer").click(function () {
        $("#defaultLoading_div").css("display", "none");
    $("#bankAccount_div").css("display", "none");
                    $("#creditCard_div").css("display", "none");
                    $("#wireTransfer_div").css("display", "block");
                    $("#payPal_div").css("display", "none");

                    $("#bankAccount").removeClass("active-div");
                    $("#creditCard").removeClass("active-div");
                    $("#wireTransfer").addClass("active-div");
                    $("#paypal").removeClass("active-div");


            $("#bankAccount").addClass("txt-colr-form-opacity-30");            
            $("#creditCard").addClass("txt-colr-form-opacity-30");
            $("#wireTransfer").removeClass("txt-colr-form-opacity-30");
            $("#paypal").addClass("txt-colr-form-opacity-30");

                    $("#bankAccount").children().children().attr("src", "../../img/blue-bank-icon_grey.png");
                    $("#creditCard").children().children().attr("src", "../../img/credit-icon_grey.png");
                    $("#wireTransfer").children().children().attr("src", "../../img/wire-transfer-icon_white.png");
                    $("#paypal").children().children().attr("src", "../../img/paypal-icon_grey.png");

                    $("#bankAccount").children().children().addClass("white-lite");
                    $("#creditCard").children().children().addClass("white-lite");
                    $("#wireTransfer").children().children().removeClass("white-lite");
                    $("#paypal").children().children().addClass("white-lite");
                });


                $("#paypal").click(function () {
        $("#defaultLoading_div").css("display", "none");
    $("#bankAccount_div").css("display", "none");
                    $("#creditCard_div").css("display", "none");
                    $("#wireTransfer_div").css("display", "none");
                    $("#payPal_div").css("display", "block");

                    $("#bankAccount").removeClass("active-div");
                    $("#creditCard").removeClass("active-div");
                    $("#wireTransfer").removeClass("active-div");
                    $("#paypal").addClass("active-div");


            $("#bankAccount").addClass("txt-colr-form-opacity-30");            
            $("#creditCard").addClass("txt-colr-form-opacity-30");
            $("#wireTransfer").addClass("txt-colr-form-opacity-30");
            $("#paypal").removeClass("txt-colr-form-opacity-30");
                    $("#bankAccount").children().children().attr("src", "../../img/blue-bank-icon_grey.png");
                    $("#creditCard").children().children().attr("src", "../../img/credit-icon_grey.png");
                    $("#wireTransfer").children().children().attr("src", "../../img/wire-transfer-icon_grey.png");
                    $("#paypal").children().children().attr("src", "../../img/paypal-icon_white.png");

                    $("#bankAccount").children().children().addClass("white-lite");
                    $("#creditCard").children().children().addClass("white-lite");
                    $("#wireTransfer").children().children().addClass("white-lite");
                    $("#paypal").children().children().removeClass("white-lite");
                });








            });
