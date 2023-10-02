function scrollToElement(elementSelector, instance = 0){
    const element = document.querySelectorAll(elementSelector)
    if(element.length > instance)
    element[instance].scrollIntoView({behavior: 'smooth'});
};

function toggleHam(x) {
    x.classList.toggle("change");

    let myMenu = document.getElementById('myMenu');
    if (myMenu.className === 'menu') {
        myMenu.className += ' menu-active'
    } else {
        myMenu.className = 'menu'; 
    }
};

let previewContainer = document.querySelector('.modal');
let previewBox = previewContainer.querySelectorAll('.modal-content');

document.querySelectorAll('.actnn .active-items').forEach(product =>{
    product.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active'); 
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 20);
});

const navLinkEls = document.querySelectorAll('.nav__link');
const containerEls = document.querySelectorAll('.container');

let currentSection = 'home';
window.addEventListener('scroll', () => {
    containerEls.forEach(containerEL => {
        if (window.scrollY >= containerEL.offsetTop - containerEL.clientHeight / 7) {
            currentSection = containerEL.id;
        }
    });

    navLinkEls.forEach(navLinkEL => {
        if (navLinkEL.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinkEL.classList.add('active');
        }
    });
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("modal-content");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}

const obsever = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
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