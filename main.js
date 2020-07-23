$(document).ready(function () {
   $('.menu-toggle').click(function () {
      $('.menu-toggle').toggleClass('visible')
      $('ul').toggleClass('visible')
      console.log('click')
   })
   $('nav a').click(function () {
      $('nav a').removeClass("menu__item_active")
      $(this).addClass("menu__item_active")
   })
})
