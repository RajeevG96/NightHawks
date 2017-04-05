// Make video stop when closing modal
$(function(){
  $('.modal').on('hidden.bs.modal', function (e) {
    $iframe = $(this).find("iframe");
    $iframe.attr("src", $iframe.attr("src"));
  });
});

// Images preview on Modal 
  $(function() {
  $('a.pop').on('click', function(e) {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#imagemodal').modal('show'); 
    e.preventDefault();
  });   
});

// Hover effect on gallery Images
var myimage = $("#gallery img").click(function(){
    myimage.find('img').removeClass('out');
    $(this).find('img').first().addClass('in');
});
