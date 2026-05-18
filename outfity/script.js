(function () {
    var track = document.getElementById('showcaseTrack');
    if (!track) return;

    var slides = track.querySelectorAll('.carousel-slide');
    var prevBtn = document.querySelector('.carousel-nav--prev');
    var nextBtn = document.querySelector('.carousel-nav--next');
    var spacerStart = null;
    var spacerEnd = null;

    function ensureSpacers() {
        if (!spacerStart) {
            spacerStart = document.createElement('div');
            spacerStart.className = 'carousel-spacer';
            spacerStart.setAttribute('aria-hidden', 'true');
            spacerEnd = spacerStart.cloneNode();
            track.insertBefore(spacerStart, track.firstChild);
            track.appendChild(spacerEnd);
        }
    }

    function spacerWidth() {
        if (!slides.length) return 0;
        return Math.max(24, (track.clientWidth - slides[0].offsetWidth) / 2);
    }

    function updateSpacers() {
        ensureSpacers();
        var w = spacerWidth() + 'px';
        spacerStart.style.width = w;
        spacerStart.style.minWidth = w;
        spacerEnd.style.width = w;
        spacerEnd.style.minWidth = w;
    }

    function scrollToIndex(index) {
        index = Math.max(0, Math.min(slides.length - 1, index));
        var slide = slides[index];
        var left = slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2;
        var maxScroll = track.scrollWidth - track.clientWidth;
        track.scrollTo({
            left: Math.max(0, Math.min(left, maxScroll)),
            behavior: 'smooth'
        });
    }

    function getActiveIndex() {
        var center = track.scrollLeft + track.clientWidth / 2;
        var index = 0;
        var minDist = Infinity;
        slides.forEach(function (slide, i) {
            var slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
            var dist = Math.abs(slideCenter - center);
            if (dist < minDist) {
                minDist = dist;
                index = i;
            }
        });
        return index;
    }

    function updateActive() {
        var index = getActiveIndex();
        slides.forEach(function (slide, i) {
            slide.classList.toggle('is-active', i === index);
        });
    }

    function scrollBySlide(direction) {
        scrollToIndex(getActiveIndex() + direction);
    }

    track.addEventListener('scroll', function () {
        window.requestAnimationFrame(updateActive);
    }, { passive: true });

    window.addEventListener('resize', function () {
        var index = getActiveIndex();
        updateSpacers();
        var slide = slides[index];
        if (slide) {
            var left = slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2;
            var maxScroll = track.scrollWidth - track.clientWidth;
            track.scrollLeft = Math.max(0, Math.min(left, maxScroll));
        }
        updateActive();
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', function () { scrollBySlide(-1); });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', function () { scrollBySlide(1); });
    }

    function init() {
        updateSpacers();
        scrollToIndex(0);
        updateActive();
    }

    if (document.readyState === 'complete') {
        requestAnimationFrame(init);
    } else {
        window.addEventListener('load', function () {
            requestAnimationFrame(init);
        });
    }
})();
