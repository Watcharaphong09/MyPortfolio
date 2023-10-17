function scrollToElement(elementSelector, instance = 0) {
    const element = document.querySelectorAll(elementSelector);
    if (element.length > instance)
        element[instance].scrollIntoView({ behavior: "smooth" });
}

function toggleHam(x) {
    x.classList.toggle("change");

    let myMenu = document.getElementById("myMenu");
    if (myMenu.className === "menu") {
        myMenu.className += " menu-active";
    } else {
        myMenu.className = "menu";
    }
}

let previewContainer = document.querySelector(".modal");
let previewBox = previewContainer.querySelectorAll(".modal-content");

document.querySelectorAll(".actnn .active-items").forEach((product) => {
    product.onclick = () => {
        previewContainer.style.display = "flex";
        let name = product.getAttribute("data-name");
        previewBox.forEach((preview) => {
            let target = preview.getAttribute("data-target");
            if (name == target) {
                preview.classList.add("active");
            }
        });
    };
});

previewBox.forEach((close) => {
    close.querySelector(".fa-times").onclick = () => {
        close.classList.remove("active");
        previewContainer.style.display = "none";
    };
});

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 20);
});

const navLinkEls = document.querySelectorAll(".nav__link");
const containerEls = document.querySelectorAll(".container");

let currentSection = "home";
window.addEventListener("scroll", () => {
    containerEls.forEach((containerEL) => {
        if (
            window.scrollY >=
            containerEL.offsetTop - containerEL.clientHeight / 7
        ) {
            currentSection = containerEL.id;
        }
    });

    navLinkEls.forEach((navLinkEL) => {
        if (navLinkEL.href.includes(currentSection)) {
            document.querySelector(".active").classList.remove("active");
            navLinkEL.classList.add("active");
        }
    });
});

let slideIndex = getAttribute("data-target");
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("modal-content");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}

const obsever = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => obsever.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-Bottom");
scrollBottom.forEach((el) => obsever.observe(el));

const scrollTops = document.querySelectorAll(".scroll-top");
scrollTops.forEach((el) => obsever.observe(el));

const scrollLeft = document.querySelectorAll(".scroll-left");
scrollLeft.forEach((el) => obsever.observe(el));

const scrollRight = document.querySelectorAll(".scroll-right");
scrollRight.forEach((el) => obsever.observe(el));

let srcollContainer = document.querySelector(".certificate");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

srcollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    srcollContainer.scrollLeft += evt.deltaY;
    srcollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    srcollContainer.style.scrollBehavior = "smooth";
    srcollContainer.scrollLeft += 640;
});

backBtn.addEventListener("click", () => {
    srcollContainer.style.scrollBehavior = "smooth";
    srcollContainer.scrollLeft -= 640;
});
