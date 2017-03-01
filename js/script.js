$(document).ready(function() {
    $('#myCarousel').carousel({
        interval: 4000
    });

    var clickEvent = false;
    $('#myCarousel').on('click', '.nav a', function() {
        clickEvent = true;
        $('.nav li').removeClass('active');
        $(this).parent().addClass('active');
    }).on('slid.bs.carousel', function(e) {
        if (!clickEvent) {
            var count = $('.nav').children().length - 1;
            var current = $('.nav li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if (count == id) {
                $('.nav li').first().addClass('active');
            }
        }
        clickEvent = false;
    });

    function show_select()
    {
      var genre0 = document.getElementById("genre0");
      var animation0 = document.getElementById("animation0");
      var fantasy0 = document.getElementById("fantasy0");

      var desired_box = genre0.options[genre0.selectedIndex].value;
      if(desired_box == animation0) {
        animation0.style.display = '';
        fantasy0.style.display = 'none';
      } else {
        fantasy0.style.display = '';
        animation0.style.display = 'none';
      }
    }



});
