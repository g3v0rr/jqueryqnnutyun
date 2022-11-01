$(function() {
 

   
  $(window).on('scroll', function() {
    if($(window).scrollTop()){
      $('nav').addClass('active')
      $('a').addClass('color')
    }
    else{
      $('nav').removeClass('active')
    }
   })
  
   $(function(){
    
      $('.overlay1').imageZoom(function () {
        $('.sec2-img1').imageZoom() ({
    
          zoom: 200
    
        })
    
      });
    
    });
    $(function(){
    
      $('.overlay2').imageZoom(function () {
        $('.sec2-img2').imageZoom() ({
    
          zoom: 200
    
        })
    
      });
    
    });
    $(function(){
    
      $('.overlay3').imageZoom(function () {
        $('.sec2-img3').imageZoom() ({
    
          zoom: 200
    
        })
    
      });
    
    });
      
        
    
       
    
   
  
  
   
  
  })