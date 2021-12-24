if (document.querySelector(".owl-carousel1")) {
    $('.owl-carousel1').owlCarousel({
        loop: true,
        margin: 100,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    })
}
if (document.querySelector(".owl-carousel2")) {
    $('.owl-carousel2').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })
}
if (document.querySelector(".owl-carousel3")) {
    $('.owl-carousel3').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })
}

if (document.getElementById("countdown")) {
    const countdown = document.querySelectorAll("#countdown")
    countdown.forEach(count => {
        var countDownDate = new Date(count.getAttribute('data-date')).getTime();

        var x = setInterval(function() {

            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            count.innerHTML = days + "d " + hours + "h " +
                minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(x);
                count.innerHTML = "";
            }
        }, 1000);

    })

}


if (document.querySelector('#table_id')) {
    $('#table_id') && $(document).ready(function() {
        $('#table_id').DataTable({
            paging: false,
            searching: false,
            ordering: false,
            info: false,
            responsive: true
        });
    });
}

if (document.querySelector('#sticky-nav')) {
    let navLinks = document.querySelectorAll("#sticky-nav a");

    // for each link 
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            // get the data-link value
            let astt = link.getAttribute("href").split('#');
            let targetId = astt[1]
            console.log(targetId)
                // scrollTo function
            window.scrollTo({
                // scroll to the element position - 60px (-60px is added because of the margin-top of each section)
                top: document.getElementById(targetId).offsetTop - 80,
                behavior: "smooth"
            });

        })
    })
}

if (document.querySelector('#Iner')) {
    const usd = document.querySelector('#usd1')
    const inr = document.querySelector('#inr1')

    usd.addEventListener('click', function() {
        document.querySelectorAll('#Iner').forEach(on => {
            on.style.display = 'none'
        });
        document.querySelectorAll('#Usd').forEach(on => {
            on.style.display = 'table-cell'
        })
    })
    inr.addEventListener('click', function() {
        document.querySelectorAll('#Usd').forEach(on => {
            on.style.display = 'none'
        });
        document.querySelectorAll('#Iner').forEach(on => {
            on.style.display = 'table-cell'
        })
    })

}
if (document.querySelector('#INR')) {
    const usd = document.querySelector('#usd1')
    const inr = document.querySelector('#inr1')

    usd.addEventListener('click', function() {
        document.querySelectorAll('#INR').forEach(on => {
            on.style.display = 'none'
        });
        document.querySelectorAll('#USD').forEach(on => {
            on.style.display = 'block'
        })
    })
    inr.addEventListener('click', function() {
        document.querySelectorAll('#USD').forEach(on => {
            on.style.display = 'none'
        });
        document.querySelectorAll('#INR').forEach(on => {
            on.style.display = 'block'
        })
    })

}

if (document.querySelector('.show-less-div')) {
    $('.show-less-div').myOwnLineShowMoreLess({
        showLessText: 'Read Less',
        showMoreText: 'Read More',
        showLessLine: 3
    });
}