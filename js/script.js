function toggleText() {
  // Get all the elements from the page
  let points =
    document.getElementById("points");

  let showMoreText =
    document.getElementById("moreText");

  let buttonText =
    document.getElementById("textButton");

  // If the display property of the dots
  // to be displayed is already set to
  // 'none' (that is hidden) then this
  // section of code triggers
  if (points.style.display === "none") {

    // Hide the text between the span
    // elements
    showMoreText.style.display = "none";

    // Show the dots after the text
    points.style.display = "inline";

    // Change the text on button to
    // 'Show More'
    buttonText.innerHTML = "Read More";
  }
  // If the hidden portion is revealed,
  // we will change it back to be hidden
  else {
    // Show the text between the
    // span elements
    showMoreText.style.display = "inline";

    // Hide the dots after the text
    points.style.display = "none";

    // Change the text on button
    // to 'Show Less'
    buttonText.innerHTML = "Read Less";
  }
}

$(document).ready(function(){
  $(".showJourney").click(function(){
    $(".journeyb").fadeIn(1000);
    $(".showJourney").fadeOut(1000);
  });
  $(".hideJourney").click(function(){
    $(".journeyb").fadeOut();
    $(".showJourney").fadeIn();
  });
});


$(document).ready(function(){
  $(".showProblem").click(function(){
    $(".problemdivShow").fadeIn(1000);
    $(".showProblem").hide();
  });
  $(".hideProblem").click(function(){
    $(".problemdivShow").fadeOut(1000);
    $(".showProblem").show();
  });
});

$(document).ready(function(){
  $(".showSolution").click(function(){
    $(".prototypingdivShow").fadeIn(1000);
    $(".showSolution").hide();
  });
  $(".hideSolution").click(function(){
    $(".prototypingdivShow").fadeOut(1000);
    $(".showSolution").show();
  });
});


$('.button').on("click", function() {
  $('.researchSlide').css('display', 'block'); 
  $('.researchSlide').get(0).slick.setPosition();
});

$('.researchSlide').slick({
  dots:false,
  arrows:true,
  infinite:true,
  autoplay:true,
  speed:300,
  slidesToShow:1,
  slidesToScroll:1,
});


// animation scroll effects open //
jQuery(function($) {
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
           }
        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
        var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
            }
    });
    };
        // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
});
// animation scroll effects close //
