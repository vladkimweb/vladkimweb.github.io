$(document).ready(function () {
   $('.menu-toggle').click(function () {
      $('.menu-toggle').toggleClass('visible')
      $('ul').toggleClass('visible')
      console.log('click')
   })
   $('nav a').click(function () {
      $('nav a').removeClass("active")
      $(this).addClass("active")
   })
})
