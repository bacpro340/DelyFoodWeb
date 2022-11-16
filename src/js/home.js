// Navigation header menu
(function(){
    var topNavigation = document.querySelector('.top-navigation');
    var navigationLinks = document.querySelectorAll('.top-navigation a');
    var activeLink = document.querySelector('a.active');
    var slide = document.querySelector('.active-link');
    
    // Add click listener for each link tag
    navigationLinks.forEach(link => {
        link.addEventListener('click',slideToLink);
    });

    function slideToLink(e) {
        // remove active class
        removeActiveClass();
        //move to current slide
        setActiveSlide(e.target);

        //make the current link active
        e.target.classList.add('active');
    }

    function removeActiveClass() {
        activeLink=document.querySelector('a.active');
        activeLink.classList.remove('active');
    }

    function setActiveSlide(target) {
        // get the left point of target link
        var left = getLeftValue(target);

        //set the left value to the current link
        slide.style.left = `${left}px`
    }

    function getLeftValue(targetLink){
        var targetLeft = targetLink.getBoundingClientRect().left;
        var topNavigationLeft = topNavigation.getBoundingClientRect().left;
        return targetLeft - topNavigationLeft + 50;
    }

    setActiveSlide(activeLink);

})();