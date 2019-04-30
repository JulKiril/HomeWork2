$(function () {
   $(".box").animate({
       width: '-=100px',
       height: '-=100px',
   },1000).animate({
       width: '+=200px',
       height: '+=200px',
       opacity: '0.5'
   },1000).animate({
       width: '-=100px',
       height: '-=100px',
       opacity: '0.8'
   },1000)
})
