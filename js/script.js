
/* ===================================
      function of remove the preloader
====================================== */

jQuery(window).on("load", function () {
    $('#preloader').fadeOut(500);
    document.body.classList.remove("overflow-hidden");
});

/* ===================================
     check of the local Storage
====================================== */

if (localStorage.getItem('newColor') != null) {
    changeColor(localStorage.getItem('newColor'))
}
if (localStorage.getItem('theme') != "") {
    $(".Dark__mode__btn").toggleClass("active");
    document.body.classList.add(localStorage.getItem('theme'));
}

/* ===================================
     tabs_data
====================================== */

let tabs_data = [
    {
        tab: "Expert Team",
        content:
            `
            <div class="tabs-content-flex undefined horizontal-tabs__tab-panel--selected">
                <div class="tabs-left">
                    <img src="images/about/about-img4.jpg" alt="about-img4">
                </div>
                <div class="tabs-right">
                    <p class="tabs-desc">There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some form, by
                        injected humour, or randomised words which don't look even slightly
                        believable. If you are going to use a passage of Lorem Ipsum, you need to be
                        sure there isn't anything embarrassing hidden in the middle of text. All the
                        Lorem Ipsum generators on the Internet
                    </p>
                    <a class="theme-button" href="/about">Get Started 
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em"
                            width="1em" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        `
    },
    {
        tab: "Best Finance Brand",
        content:
            `
            <div class="tabs-content-flex img_right">
                <div class="tabs-left">
                    <img src="images/about/about-img5.jpg" alt="Tabs">
                </div>
                <div class="tabs-right">
                    <p class="tabs-desc">There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable. If you are going to use
                        a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                        hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                    </p>
                    <a class="theme-button" href="/about">Get Started 
                        <svg stroke="currentColor"
                                fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                stroke-linejoin="round" class="icon" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        `
    },
    {
        tab: "Best Leadership Ideas",
        content:
            `
                <div class="tabs-content-flex ">
                    <div class="tabs-left">
                        <img src="images/about/about-img6.jpg" alt="Tabs">
                    </div>
                    <div class="tabs-right">
                        <p class="tabs-desc">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                            by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of
                            Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators
                            on the Internet
                        </p>
                        <a class="theme-button" href="/about">Get Started
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
        `
    }
]


/* ================================================
     function of change the content of Tabs Content
=================================================== */

$('.horizontal-tabs__tab').on("click", function () {
    $(this).addClass("horizontal-tabs__tab--selected");
    $(this).siblings().removeClass("horizontal-tabs__tab--selected");
    for (let index = 0; index < tabs_data.length; index++) {

        if ($(this).text() == tabs_data[index].tab) {
            $(".tabs-content").html(tabs_data[index].content)
        }
    }

})

/* ===================================
     home Carousel
====================================== */

$('.home_slider').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 5,
    dots: false,
    nav: true,
    items: 1,

})

/* ===================================
     clients Carousel
====================================== */

$('.clients-wrapper').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    dots: false,
    nav: false,
    responsive: {
        0: { items: 1 },
        450: { items: 2 },
        600: { items: 3 },
        1e3: { items: 5 }
    },

})

/* ===================================
     service Carousel
====================================== */

$('.service__slider ').owlCarousel({
    loop: true,
    autoplay: false,
    margin: 30,
    dots: true,
    nav: false,
    loop: true,
    items: 2,
    responsive: {
        0: { items: 1 },
        450: { items: 1 },
        600: { items: 2 },
        1e3: { items: 2 }
    },

})

/* ===================================
     testimonial Carousel
====================================== */

$('.testimonial__slider ').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    dots: true,
    nav: false,
    responsive: {
        0: { items: 1 },
        450: { items: 1 },
        600: { items: 1 },
        1e3: { items: 2 }
    },


})


/* ===================================
     function of Back To Top
====================================== */

$(window).on("scroll", function () {

    if ($(window).scrollTop() > 30) {
        $("body").addClass("header-menu-fixed"), $(".scroll-d-block").addClass("d-block")
    }
    else {
        $("body").removeClass("header-menu-fixed"), $(".scroll-d-block").removeClass("d-block")
    }

    if ($(window).scrollTop() > 300) {
        $("#back-to-top").addClass("back-btn-shown")
    }
    else {
        $("#back-to-top").removeClass("back-btn-shown")
    }

})

/* ===================================
     function of Back To Top
====================================== */
$("#back-to-top").on("click", function (e) {

    $("html, body").animate({ scrollTop: 0 }, 1e3);

})

/* ===================================
     function of Open & Close the Search button
====================================== */

$(".search-button").on("click", function (e) {
    e.preventDefault();
    if ($(".header-menu-searchform").hasClass("active") == false) {
        $(".header-menu-searchform").addClass("active");
        $(".search-button svg").replaceWith(` <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" class="search-icon" height="1em" width="1em"  xmlns="http://www.w3.org/2000/svg">
        <path
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
        </path>
     </svg>`)
    }
    else {
        $(".header-menu-searchform").removeClass("active");
        $(".search-button svg").replaceWith(`
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
        stroke-linecap="round" stroke-linejoin="round" class="search-icon"
        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        `)
    }



})


/* ===================================
     function of Open & Close the controller
====================================== */

$('.controller_icon').click(function () {
    if ($('#general_controller_container').css('left') == '0px') {
        $('#general_controller_container').animate({ left: '-178px' }, 500)
    }
    else {
        $('#general_controller_container').animate({ left: '0px' }, 500)
    }
})


/* ===================================
     function of Change_color
====================================== */
function changeColor(newColor) {
    $(":root").css("--primary_color", newColor);
    $(":root").css("--primary_color_rgb", newColor.slice(4, newColor.length - 1));
    // store newColor is a localStorage
    localStorage.setItem('newColor', newColor)
}

/* ===================================
     Event of the Change_color.
====================================== */
$('.controller_item .Color_Scheme_container span').click(function () {
    $(this).addClass("active");
    
    $(this).siblings().removeClass("active");
 
    let newColor = $(this).css("background-color");

    // call of the function Change_color
    changeColor(newColor)

})

/* ===================================
     function of Dark_Mode
====================================== */

$(".Dark__mode__btn").on("click", function () {
    $(this).toggleClass("active");
    document.body.classList.toggle("dark-theme");
    let theme = localStorage.getItem("theme");

    if (theme === "dark-theme") {
        localStorage.setItem("theme", "");
    } else {
        localStorage.setItem("theme", "dark-theme");
    }
})


/* ===================================
     function of Open side_menu
====================================== */

$(".side-menu-open").on("click", function (e) {
    e.preventDefault()
    $(".side-nav-container").addClass("active");
})

/* ===================================
     function of Close side_menu
====================================== */

$(".side-menu-close").on("click", function (e) {
    e.preventDefault()
    $(".side-nav-container").removeClass("active");

})

/* ===================================
     function of counterup (About Page)
====================================== */

$('.count').each(function () {
    $(this).appear(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});


/* ===================================
     function of Clear local storage
====================================== */

$(".Clear_local_storage a").on("click", function (e) {
    localStorage.removeItem("newColor");
    location.reload();
})



