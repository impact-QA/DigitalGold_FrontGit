$(document).ready(function () {
    setInterval(function () {
        if ($(window).width() <= "1199") {
            $("#dotResp_1").html(". . . . . . . . . . . .");
            $("#dotResp_2").html(". . . . . . . . . . . . . . . .");
            $("#dotResp_3").html(". . . . . . . . . . . . . . . . ");
        }
        else {
            $("#dotResp_1").html(". . . . . . . . . . . . . .");
            $("#dotResp_2").html(". . . . . . . . . . . . . . . . . . . . . . ");
            $("#dotResp_3").html(". . . . . . . . . . . . . . . . . . . . . . .");
        }
    }, 10);

});