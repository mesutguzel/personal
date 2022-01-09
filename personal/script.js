const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
    navbarToggler.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
    if (navbarMenu.classList.contains("open")) {
        navbarToggler.click();
    }
}

var cnt = 0,
    texts = [];
var $fclick = false;


$(".imawhat").each(function() {
    texts[cnt++] = $(this).text();
});

function fadeText() {
    if (cnt >= texts.length) { cnt = 0; }
    $('.ima').html(texts[cnt++]);
    $('.ima')
        .fadeIn('fast').animate({ opacity: 1.0 }, 5000).fadeOut('fast',
            function() {
                return fadeText();
            }
        );
}

function toggleForm() {
    if ($fclick === true) {
        $(".contact, .head, .arm").toggleClass("active inactive");
    } else {
        $(".contact, .head, .arm").addClass("active");
        $fclick = true;
    }
}

$(".contactme, .arrow, .closer, .submit").on("click", toggleForm);

fadeText();


function musicOn() {
    setTimeout(function() {
        var vid = document.getElementById("blackmirror");
        vid.autoplay = false;
        vid.load();
    }, 16000)
};

function hideLoadingDiv() {
    setTimeout(function() {
        document.getElementById('LOADING').classList.add('hidden');
    }, 6200)
};

function displayLoadingDiv() {
    setTimeout(function() {
        document.getElementById('LOADING1').classList.add('visible');
    }, 6200)
};