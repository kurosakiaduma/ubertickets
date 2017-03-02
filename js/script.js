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

    $("#release").change(function() {
        $("#genre").show();
        $("#label-g").show();
        $("#label-m").hide();
        $("#movies").hide();
        if ($(this).data('options') == undefined) {
            /*Taking an array of all options-2 and kind of embedding it on the select*/
            $(this).data('options', $('#genre option').clone());
        }
        var id = $(this).val();
        var options = $(this).data('options').filter('[data-id=' + id + ']');
        $('#genre').html(options);
    });


    $("#genre").change(function() {
        $('#legobatman').hide();
        $('#cars3').hide();
        $('#moana').hide();
        $('#fd').hide();
        $('#bb').hide();
        $('#aw').hide();
        $('#fbw').hide();
        $('#bvs').hide();
        $('#civil').hide();
        $('#thor').hide();
        $('#jla').hide();
        $('#tlk').hide();
        $('#fla').hide();
        $('#oth').hide();
        $('#mh').hide();
        $('#hp').hide();
        $('#pj').hide();
        $('#tbfg').hide();
        $('#wrc').hide();
        $('#spectre').hide();
        $('#mip').hide();
        $('#jwo').hide();
        $('#uncle').hide();
        $("#movies").show();
        $("#label-m").show();
        if ($(this).data('options') == undefined) {
            $(this).data('options', $('#movies option').clone());
        }
        var id = $(this).val();
        var options = $(this).data('options').filter('[data-id=' + id + ']');
        $('#movies').html(options);
    });


    $(function() {
        $('#legobatman').hide();
        $('#cars3').hide();
        $('#moana').hide();
        $('#fd').hide();
        $('#bb').hide();
        $('#aw').hide();
        $('#fbw').hide();
        $('#bvs').hide();
        $('#civil').hide();
        $('#thor').hide();
        $('#jla').hide();
        $('#tlk').hide();
        $('#fla').hide();
        $('#oth').hide();
        $('#mh').hide();
        $('#hp').hide();
        $('#pj').hide();
        $('#tbfg').hide();
        $('#wrc').hide();
        $('#spectre').hide();
        $('#mip').hide();
        $('#jwo').hide();
        $('#uncle').hide();
        $("#movies").change(function() {
            if ($('#movies').val() == 'legobatman') {
                $('#legobatman').show();
                $('#cars3').hide();
                $('#moana').hide();
                $('#fd').hide();
            }

            else if ($('#movies').val() == 'cars3') {
                $('#cars3').show();
                $('#legobatman').hide();
                $('#moana').hide();
                $('#fd').hide();
            }
            else if ($('#movies').val() == 'moana') {
                $('#moana').show();
                $('#cars3').hide();
                $('#legobatman').hide();
                $('#fd').hide();
            }
            else if ($('#movies').val() == 'fd') {
                $('#fd').show();
                $('#moana').hide();
                $('#cars3').hide();
                $('#legobatman').hide();

            } else {
                $('#legobatman').hide();
                $('#cars3').hide();
                $('#moana').hide();
                $('#bb').hide();
                $('#aw').hide();
                $('#fbw').hide();
                $('#bvs').hide();
                $('#civil').hide();
                $('#thor').hide();
                $('#jla').hide();
                $('#tlk').hide();
                $('#fla').hide();
                $('#oth').hide();
                $('#mh').hide();
                $('#hp').hide();
                $('#pj').hide();
                $('#tbfg').hide();
                $('#wrc').hide();
                $('#spectre').hide();
                $('#mip').hide();
                $('#jwo').hide();
                $('#uncle').hide();
            }
        });

    });
});
