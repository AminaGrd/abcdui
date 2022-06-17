let slideArticle = 1;
showSlides(slideArticle);

function plusSlides(n) {
    showSlides(slideArticle += n);
}

function currentSlide(n) {
    showSlides(slideArticle = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('dot');
    
    if(n > slides.length) { slideArticle = 1 }
    
    if(n < 1 ) { slideArticle = slides.length }
    
    // Cacher toutes les slides
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Retirer "active" de tous les points
    for(let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('activeslide');
    }
    
    // Afficher la slide demandée
    slides[slideArticle - 1].style.display = 'block';
    
    // Ajouter "active" sur le point cliqué
    dots[slideArticle - 1].classList.add('activeslide');
}
