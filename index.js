$(document).ready(function(){
    
       let v =$(".bag4");

       let x = $(".b1").text();
   
      $(".card1").click(function () {
        $(".card1_info").toggle();
       
      });
      $(".card2").click(function () {
        $(".card2_info").toggle();
         i = 2;
      });
      $(".card3").click(function () {
        $(".card3_info").toggle();
         i = 3;
      });
      $(".card4").click(function () {
        $(".card4_info").toggle();
         i = 4;
      });
      
      $(".img1").click(function () {
        var s = $(".imgg1").attr("src");
        $(".big-img").attr("src", s);
      });
      $(".img2").click(function () {
        var s = $(".imgg2").attr("src");
        $(".big-img").attr("src", s);
      });
      $(".img3").click(function () {
        var s = $(".imgg3").attr("src");
        $(".big-img").attr("src", s);
      });
      $(".img4").click(function () {
        var s = $(".imgg4").attr("src");
        $(".big-img").attr("src", s);
      });
       $(".img5").click(function () {
         var s = $(".imgg5").attr("src");
         $(".big-img").attr("src", s);
       });
        $(".img6").click(function () {
          var s = $(".imgg6").attr("src");
          $(".big-img").attr("src", s);
        });
        
        $(".bag1").click(function(){
            v.addClass("close");
            v.removeClass("open")
            $(this).addClass("open")
            v=$(this)
            v.removeClass("close");
        });
         $(".bag2").click(function () {
           v.addClass("close");
           v.removeClass("open");
           $(this).addClass("open");
           v = $(this);
           v.removeClass("close")
         });
          $(".bag3").click(function () {
            v.addClass("close");
            v.removeClass("open");
            $(this).addClass("open");
            v = $(this);
            v.removeClass("close");
          });
           $(".bag4").click(function () {
             v.addClass("close");
             v.removeClass("open");
             $(this).addClass("open");
             v = $(this);
             v.removeClass("close");
           });
        


        //  $(".imgg1").mouseover(function () {
        //    $(".imgg1").css("width", "300px");
        //    $(".imgg1").css("width", "300px");


        //  });
        
        // $(".b1").click(function(){

        //     if(x=="light mod"){
        //     $("body").css({
        //       "background-color": "light",
        //       "color": "black",
             
        //     })
        //       $(".card").css({
        //         "background-color": "red",
                
        //       });
        //      x = "dark mod";
        // }
        
        //     else{
        //          $("body").css({
        //       "background-color": "dark",
        //       "color": "white",
        //     })
        //       $(".card").css({
        //         "background-color": "darkyellow",
                
        //       });
        //      x = "light mod";
        //     }
            
        //     });
        

    
    });


