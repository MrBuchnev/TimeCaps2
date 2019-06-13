var showNavigation = true;
var lastScrollPosition = 0;
var navMenuOpen = false;

var onScroll = function () {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    // failsafe for momentum scrolling on mobile devices
    if (currentScrollPosition < 0) {
        return;
    }

    showNavigation = currentScrollPosition < lastScrollPosition;
    if (showNavigation) {
        $('.navigation').removeClass('navigation--hidden');
    } else {
        $('.navigation').addClass('navigation--hidden');
        $('.navigation__checkbox').prop('checked', false);
    }

    lastScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', onScroll);
