document.addEventListener('DOMContentLoaded', function () {
    
    new Splide('.splide', {
        type: 'loop',
        autoplay: true,
        interval: 5000,
        fixedWidth: '100%',
        arrows: false,
        pagination: false
    }).mount();

    new Splide('#location1', {
        type: 'loop',
        autoplay: true,
        interval: 5000,
        gap: '25px',
        arrows: true,
        pagination: false,
        perPage: 1,
        mediaQuery: 'min',
        breakpoints: {
            0: {
                perPage: 1,
                fixedWidth: '100%',
                padding: '10px'
            },
            768: {
                perPage: 4,
                fixedWidth: '25%',
            },
        }
    }).mount();
    new Splide('#location2', {
        type: 'loop',
        autoplay: true,
        interval: 5000,
        gap: '25px',
        arrows: true,
        pagination: false,
        perPage: 1,
        mediaQuery: 'min',
        breakpoints: {
            0: {
                perPage: 1,
                fixedWidth: '100%',
                padding: '10px'
            },
            768: {
                perPage: 4,
                fixedWidth: '25%',
            },
        }
    }).mount();
});