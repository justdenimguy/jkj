$(document).ready(function(){
  $('.contact-form').submit(function(e){
    e.preventDefault();
    window.location = "/thankyou.html";
  });
  //  bg
  var bgs = {
    "/": "trail.jpg",
    "/index.html": "trail.jpg",
    "/purchase.html": "sencil.jpg",
    "/tribe.html": "working-men.jpg",
    "/contact.html": "trail.jpg",
    "/thankyou.html": "log.jpg"
  }
  $("body").vegas({
    slides: [
      { src: bgs[window.location.pathname] }
    ]
  });
  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
  });
});
