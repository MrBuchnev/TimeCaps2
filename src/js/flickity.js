$('.motto__slider').flickity({
    initialIndex: 3,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    draggable: false,
    cellAlign: 'left',
    // autoPlay: 2000,
});

$('.howto__slider').flickity({
    initialIndex: 0,
    prevNextButtons: true,
    pageDots: true,
    wrapAround: false,
    draggable: false,
    fade: true,
    arrowShape: {
        x0: 20,
        x1: 70, y1: 50,
        x2: 80, y2: 50,
        x3: 30
    },
});
