$(document).ready(function(){

    
      $("#headingOne").click(function(){
        
        $("#headingOne").addClass("bg");
        $("#btnBlue").addClass("white");
        $("#silver1").addClass("bg");
        $("#silver2").addClass("bg");
        $("#headingFour").removeClass("bg");
        $("#headingFive").removeClass("bg");
        $("#btnBlue").removeClass("black");
        $("#btnWhite5").removeClass("white");
        $("#btnWhite4").removeClass("white");
        $("#btnWhite5").addClass("black");
        $("#btnWhite4").addClass("black");
        $("#gold").addClass("edi");
          $("#gold").removeClass("bg");
           $("#silver1").addClass("bg");
          $("#silver1").removeClass("edi");
        $("#silver2").addClass("bg");
          $("#silver2").removeClass("edi");
        
          $("#headingOne").removeClass("brd-card");
          $("#headingFive").addClass("brd-card");
          $("#headingFour").addClass("brd-card");

         $("#collapseFive").removeClass("show");
         $("#collapseSix").removeClass("show");
        
        


    });
    
    
    
    $("#headingFive").click(function(){
        
        $("#headingFive").addClass("bg");
        $("#silver2").addClass("bg");
        $("#btnBlue").addClass("black");
        $("#btnWhite5").removeClass("black");
        $("#btnWhite5").addClass("white");
        $("#btnWhite4").addClass("black");
        $("#btnWhite4").removeClass("white");
        $("#btnBlue").removeClass("white");
        $("#gold").removeClass("edi");
        $("#gold").addClass("bg");
        $("#silver1").removeClass("bg");
        $("#silver1").addClass("edi");
        $("#headingFour").removeClass("bg");
        $("#headingOne").removeClass("bg");
       
        
         $("#gold").addClass("bg");
          $("#gold").removeClass("edi");
           $("#silver1").addClass("edi");
          $("#silver1").removeClass("bg");
        $("#silver2").addClass("bg");
        $("#silver2").removeClass("edi");
        $("#headingOne").addClass("brd-card");
        $("#headingFive").removeClass("brd-card");
        $("#headingFour").addClass("brd-card");        

        $("#collapseOne").removeClass("show");
        $("#collapseSix").removeClass("show");

    });

  
    $("#headingFour").click(function(){
        
        $("#headingOne").removeClass("bg");
        $("#headingFour").addClass("bg");
        $("#silver1").addClass("bg");
        $("#headingFive").removeClass("bg");
        $("#btnBlue").addClass("black");
        $("#btnWhite5").addClass("black");
        $("#btnWhite4").removeClass("black");
        $("#btnWhite4").addClass("white");
        $("#btnBlue").removeClass("white");
        $("#btnWhite5").removeClass("white");
        $("#gold").addClass("bg");
        $("#gold").removeClass("edi");
        $("#silver2").removeClass("bg");
        $("#silver2").addClass("edi");
        $("#headingOne").addClass("brd-card");
        $("#headingFive").addClass("brd-card");
        $("#headingFour").removeClass("brd-card");           
        
         $("#gold").addClass("bg");
          $("#gold").removeClass("edi");
           $("#silver1").addClass("bg");
          $("#silver1").removeClass("edi");
        $("#silver2").addClass("edi");
          $("#silver2").removeClass("bg");

          $("#collapseOne").removeClass("show");
          $("#collapseFive").removeClass("show");

          $("#collapseOne").removeClass("show");
          $("#collapseFive").removeClass("show");



    });
    

      $("#headingOneOne").click(function(){
        $("#headingOneOne").addClass("bg");
        $("#headingNine").removeClass("bg");
        $("#headingSeven").removeClass("bg");
        $("#headingOneOne").addClass("bg-bw");


        $("#headingOneOne").addClass("whiteColor");
        $("#collapseNine").removeClass("show");
        $("#collapseSeven").removeClass("show");



       

	});        

    $("#headingNine").click(function(){
        $("#headingOneOne").removeClass("bg");
        $("#headingNine").addClass("bg");
        $("#headingSeven").removeClass("bg");

        $("#headingNine").addClass("whiteColor");


        $("#collapseOneOne").removeClass("show");
        $("#collapseSeven").removeClass("show");



      

        });
    
    $("#headingSeven").click(function(){
        $("#headingOneOne").removeClass("bg");
        $("#headingNine").removeClass("bg");
        $("#headingSeven").addClass("bg");
        $("#headingOneOne").addClass("bg-bw");

        $("#headingSeven").addClass("whiteColor");

        $("#collapseOneOne").removeClass("show");
        $("#collapseNine").removeClass("show");



        
        
	});
                  

});