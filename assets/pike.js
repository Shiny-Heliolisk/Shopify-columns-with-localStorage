$(document).ready(function () {
    var x = 5;
    var y=3;
    viewMore(x);
    assignValueToCarousel(y);

    // $('.accordion').click(function(){
    //     $(this).next().slideToggle();
    // });

    // $('.accordion').click(function(){
    //     $(this).children().slideToggle();
    // });

    // $('.accordion').click(function(){
        
    //     $(this).siblings().filter(".panel").not($(this).next()).slideUp();
    //     $(this).next().slideToggle();
        
    // });

    $('.test-slick').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll:1,
        arrow:true,
        dots:true
      });

    function assignValueToCarousel(y){
    if($('.owl-carousel').is('.show-two')){
        y = 2;
    }
    else if ($('.owl-carousel').is('.show-one')) {
        y= 1;
    } ;
    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        // autoWidth:true,
        dotsEach: 1,
        // autoplay: true,
        items:y
    });
}


    $('.readmore').click(function (event) {
        event.preventDefault();
        var descriptionFull = document.querySelector('.para-full');
        descriptionFull.style.display = 'block';
        var descriptionShort = document.querySelector('.para-short');
        descriptionShort.style.display = 'none';
    });
    $('.readless').click(function (event) {
        event.preventDefault();
        var descriptionFull = document.querySelector('.para-full');
        descriptionFull.style.display = 'none';
        var descriptionShort = document.querySelector('.para-short');
        descriptionShort.style.display = 'block';
    });



    $('.more-items').click(function () {
        x = x + 6;
        viewMore(x);
        console.log(x);
        if(x>=16){
            $('.more-items').addClass('disable');
        }
    });
    function viewMore(x) {
        $('.content').each(function () {
            if ($(this).index() <= x) {
                $(this).addClass('active');
                $(this).removeClass('disable');
            }
        });
    }

    $('.pike-button').each(function(){
        if ($(this).index() == 1) {
            $(this).addClass('pike-second-button');
        }
    });

    // neverland
    $('.two-columns').addClass("two-columns-inactive");
    $('.four-columns').addClass("four-columns-active");
    
    // check values in storage, if they exist then use
    var checkLayout  = Boolean(localStorage.getItem("classLayout"));
    var check_2Columns_button = Boolean(localStorage.getItem("two-col_is-active"));
    var check_4Columns_button = Boolean(localStorage.getItem("four-col_is-active"));
    console.log(check_2Columns_button) ;
    console.log(check_4Columns_button) ;
    console.log(checkLayout) ;
    if (checkLayout || checkLayout=="") {
        var oldLayout = localStorage.getItem("classLayout");   
        $('#product-grid').removeClass("grid--4-col-desktop");  
        $('#product-grid').addClass(oldLayout);
    }
    if (oldLayout== null) {
        $('#product-grid').addClass("grid--4-col-desktop"); 
    }
    if (check_2Columns_button) {
        var old_2Columns_button = localStorage.getItem("two-col_is-active");    
        $('.two-columns').removeClass('two-columns-active');
        $('.two-columns').removeClass('two-columns-inactive'); 
        $('.two-columns').addClass(old_2Columns_button);
    }
    if (check_4Columns_button) {
        var old_4Columns_button = localStorage.getItem("four-col_is-active");    
        $('.four-columns').removeClass('four-columns-active');
        $('.four-columns').removeClass('four-columns-inactive'); 
        $('.four-columns').addClass(old_4Columns_button);
    }
    
    $('.four-columns').click(function(){
        
        $('.four-columns').removeClass('four-columns-inactive');
        $('.four-columns').addClass('four-columns-active');
        localStorage.setItem("four-col_is-active","four-columns-active");

        $('.two-columns').removeClass('two-columns-active');
        $('.two-columns').addClass('two-columns-inactive');
        localStorage.setItem("two-col_is-active","two-columns-inactive");

        $('#product-grid').addClass("grid--4-col-desktop");
        localStorage.setItem("classLayout","grid--4-col-desktop");
        
    });
    $('.two-columns').click(function(){
        $('.two-columns').removeClass('two-columns-inactive');
        $('.two-columns').addClass('two-columns-active');
        localStorage.setItem("two-col_is-active","two-columns-active");

        $('.four-columns').removeClass('four-columns-active');
        $('.four-columns').addClass('four-columns-inactive');
        localStorage.setItem("four-col_is-active","four-columns-inactive");

        $('#product-grid').removeClass("grid--4-col-desktop");
        localStorage.setItem("classLayout","");
    });

});