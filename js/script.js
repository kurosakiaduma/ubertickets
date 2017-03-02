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
        $("#totalPrice").hide();
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
        $("#totalPrice").show();
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
            } else if ($('#movies').val() == 'cars3') {
                $('#cars3').show();
                $('#legobatman').hide();
                $('#moana').hide();
                $('#fd').hide();
            } else if ($('#movies').val() == 'moana') {
                $('#moana').show();
                $('#cars3').hide();
                $('#legobatman').hide();
                $('#fd').hide();
            } else if ($('#movies').val() == 'fd') {
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

    $("#release").change(getPrice);
    $("#genre").change(getPrice);
    $("#movies").change(getPrice);



    // Function executes on change of first select option field.
    $("#release").change(function() {
        var selectedRelease = $("#release option:selected").val();
    });


    // Function executes on change of second select option field.
    $("#genre").change(function() {
        var selectedGenre = $("#genre option:selected").val();
    });

    // Function executes on change of third select option field.
    $("#movies").change(function() {
        var selectedMovie = $("#movies option:selected").val();
    });


    //Initializing price array
    var releasePrice = new Array();
    var genrePrice = new Array();
    var moviesPrice = new Array();



    //Function to calculate price
    function getPrice() {
        var totalPrice = 0;
        if ($("#release").val() == "ex") {
            releasePrice["ex"] = 10;
        } else {
            releasePrice["nonex"] = 5;
        }

        if ($("#genre").val() == "animationnew") {
            genrePrice["animationnew"] = 2;
        } else if ($("#genre").val() == "fantasynew") {
            genrePrice["fantasynew"] = 3;
        } else if ($("#genre").val() == "actionnew") {
            genrePrice["actionnew"] = 4;
        } else if ($("#genre").val() == "animationold") {
            genrePrice["animationold"] = 1;
        } else if ($("#genre").val() == "fantasyold") {
            genrePrice["fantasyold"] = 1;
        } else if ($("#genre").val() == "actionold") {
            genrePrice["actionold"] = 1;
        }



        if ($("#movies").val() == "legobatman") {
            moviesPrice["legobatman"] = 1;
        } else if ($("#movies").val() == "cars3") {
            moviesPrice["cars3"] = 1;
        } else if ($("#movies").val() == "moana") {
            moviesPrice["moana"] = 1;
        } else if ($("#movies").val() == "fd") {
            moviesPrice["fd"] = 1;
        } else if ($("#movies").val() == "bb") {
            moviesPrice["bb"] = 2;
        } else if ($("#movies").val() == "aw") {
            moviesPrice["aw"] = 2;
        } else if ($("#movies").val() == "passengers") {
            moviesPrice["passengers"] = 2;
        } else if ($("#movies").val() == "fbw") {
            moviesPrice["fbw"] = 2;
        } else if ($("#movies").val() == "bvs") {
            moviesPrice["bvs"] = 3;
        } else if ($("#movies").val() == "civil") {
            moviesPrice["civil"] = 3;
        } else if ($("#movies").val() == "jla") {
            moviesPrice["jla"] = 3;
        } else if ($("#movies").val() == "thor") {
            moviesPrice["thor"] = 3;
        } else if ($("#movies").val() == "tlk") {
            moviesPrice["tlk"] = 1;
        } else if ($("#movies").val() == "fla") {
            moviesPrice["fla"] = 1;
        } else if ($("#movies").val() == "oth") {
            moviesPrice["oth"] = 1;
        } else if ($("#movies").val() == "mh") {
            moviesPrice["mh"] = 1;
        } else if ($("#movies").val() == "hp") {
            moviesPrice["hp"] = 2;
        } else if ($("#movies").val() == "pj") {
            moviesPrice["pj"] = 2;
        } else if ($("#movies").val() == "tbfg") {
            moviesPrice["tbfg"] = 2;
        } else if ($("#movies").val() == "wrc") {
            moviesPrice["wrc"] = 2;
        } else if ($("#movies").val() == "spectre") {
            moviesPrice["spectre"] = 3;
        } else if ($("#movies").val() == "mip") {
            moviesPrice["mip"] = 3;
        } else if ($("#movies").val() == "jwo") {
            moviesPrice["jwo"] = 3;
        } else if ($("#movies").val() == "uncle") {
            moviesPrice["uncle"] = 3;
        }


        var release = $("#release");
        var genre = $("#genre");
        var movies = $("#movies");

        totalPrice = releasePrice[release.val()] + genrePrice[genre.val()] +
            moviesPrice[movies.val()];

        $("#totalPrice").html("Your cost for the movie is KSH." + totalPrice * 100);

    }


});
