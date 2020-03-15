//event pada saat link di diklik

$('.page-scroll').on('click', function (e) {

    // ambil isi href

    var href = $(this).attr('href');

    //tangkap elemen ybs 
    var elemenHref = $(href);


    //pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenHref.offset().top - 50
    }, 1250, 'swing');

    e.preventDefault();
});