"use strict";

document.addEventListener("DOMContentLoaded", function(){

  var $accordionElement = $("[data-js='accordion']")

  // $accordionElement.on("click", "[data-js='accordion']", function(e){
  //   var $accordionClicked = $(e.currentTarget);
  //   $accordionClicked.toggleClass('clicked');
  //
  // });

  $(function() {
    $("#accordion").find(".accordion__toggle").click(function(){

      $(this).next().slideToggle("fast");

      $(".accordion__pannel").not($(this).next()).slideUp("fast");

    });
  });

});
