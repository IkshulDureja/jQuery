$('h1').click(function(){
   $(this).text("I was changed!")
 })
 
 $('li').click(function(){
   console.log("any li was clicked!");
 })
 
 
 //KEY PRESS
 // $('input').eq(0).keypress(function() {
 //   $('h3').toggleClass('turnBlue')
 // })
 
 
 // $('input').eq(0).keypress(function(event) {
 // console.log(event);
 // })
 
 
 $('input').eq(0).keypress(function() {
   if(event.which === 13){
     $('h3').toggleClass('turnBlue')
   }})
 
 
 //on()
 $('h1').on('mouseenter',function() {
   $(this).toggleClass('turnRed')
 })
 
 
 $('input').eq(1).on('click',function() {
   $('.container').slideUp(3000)
 })
 