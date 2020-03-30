$(document).ready(function(){

$(function(){
  var tickerLength = $('.container ul li').length;
  var tickerHeight = $('.container ul li').outerHeight();
  $('.container ul li').prependTo('.container ul');
  $('.container ul').css('marginTop',-tickerHeight);
  function moveTop(){
    $('.container ul').animate({
      top : -tickerHeight
    },800, function(){
      $('.counter').counterUp({
    delay: 10,
    time: 1000
});
     $('.container ul li').appendTo('.container ul');
      $('.container ul').css('top','');
    });
   }
  setInterval( function(){
    moveTop();
  }, 4000);

  });
$(function(){
  var tickerLength = $('.container2 ul li').length;
  var tickerHeight = $('.container2 ul li').outerHeight();
  $('.container2 ul li').prependTo('.container2 ul');
  $('.container2 ul').css('marginTop',-tickerHeight);
  function moveTop(){
    $('.container2 ul').animate({
      top : -tickerHeight
    },800, function(){
      $('.container2 ul li').appendTo('.container2 ul');
      $('.container2 ul').css('top','');
    });
   }
  setInterval( function(){
    moveTop();
  }, 4000);

  });
  

});