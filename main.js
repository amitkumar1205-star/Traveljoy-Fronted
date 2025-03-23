$(document).ready(function () {
    $(".slick-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $(".prev-btn"),
        nextArrow: $(".next-btn"),
        dots: false,
        responsive: [
            {
                breakpoint: 1091,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 596,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});


document.querySelectorAll(' input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', function () {
        document.querySelectorAll(' span').forEach((span) => {
            span.style.color = "#000"; 
        });
        if (this.checked) {
            this.nextElementSibling.style.color = "#ff6347"; 
        }
    });
});




document.querySelectorAll('.button-group button').forEach((button) => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.button-group button').forEach((btn) => {
            btn.style.backgroundColor = "#fff"; 
            btn.style.border = "2px solid #ccc"; 
        });
        this.style.backgroundColor = "#fceaea"; 
        this.style.border = "2px solid #f58a8a"; 
    });
});

document.querySelectorAll('.buttons button').forEach((button) => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.buttons button').forEach((btn) => {
            btn.style.backgroundColor = "#fff"; 
            btn.style.border = "2px solid #ccc"; 
            btn.style.color = "#6b7280"; 
        });
        this.style.backgroundColor = "#fceaea"; 
            this.style.border = "2px solid #f58a8a"; 
            this.style.color = " #f58a8a"; 
    });
});


window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block'; 
    } else {
        backToTop.style.display = 'none'; 
    }
});

document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


$(document).ready(function() {
    $(".mobile_toggle").click(function() {
        $(".mb_menu_wrap").slideToggle(1000); 
        $(this).toggleClass("menu_toggle"); 
    });
});


