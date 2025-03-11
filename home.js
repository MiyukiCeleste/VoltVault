let prevScrollPos = window.scrollY;
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function() {
            let currentScrollPos = window.scrollY;
            if (prevScrollPos < currentScrollPos) {
                navbar.style.top = "-80px";
            } else {
                navbar.style.top = "0";
            }
            prevScrollPos = currentScrollPos;
    });

    window.addEventListener("scroll", function() {
        let content = document.querySelector(".content");
        let scrollY = window.scrollY;
    
        if (scrollY > window.outerHeight) {
            content.style.background = "#141414";
        } else {
            content.style.background = "#141414";
        }
    });

    function toggleEffect() {
        document.querySelector(".card").classList.toggle("active");
    }
