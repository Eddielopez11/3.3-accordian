"use strict";

document.addEventListener("DOMContentLoaded", function(){

// jquery makes it a little too easy without knowing how to do much in
// regular vanilla javascript. i suppose thats why employers now want you to
// really know vanilla. i'd love to be able to do vanilla this easy one day.

  $(function() {
    // locates id accordion which is a div and looks for the following
    // which is set to accordion toggle, linked in to my headers
    // and on click performs the following funcion.
    $("#accordion").find(".accordion__toggle").click(function(){
      // headers sibling(this -> next) toggles the slide or show which
      // preset in jquery in a slow speed
      $(this).next().slideToggle("slow");
      // if the header is not the one being clicked on,
      // then the sibling following that header will slide up, or hide
      $(".accordion__pannel").not($(this).next()).slideUp("slow");

    });
  });

});
