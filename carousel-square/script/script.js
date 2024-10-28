const carousel = document.querySelector('.carousel')
const itemWidth = carousel.querySelector('.item').offsetWidth;
const arrow = document.querySelectorAll('.arrow');
const carouselChildren = [...carousel.children]
const dots = document.querySelectorAll('.dot-element')
const cardItem = Math.round(carousel.offsetWidth / itemWidth)

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const scrollPosition = (index+1) * (itemWidth * 3);
        carousel.scrollLeft = scrollPosition;
    })
})

var isMoving = false, startX, startScrollLeft;

carouselChildren.slice(-cardItem).reverse().forEach(item => {
    carousel.insertAdjacentHTML('afterBegin', item.outerHTML);
})
carouselChildren.slice(0, cardItem).forEach(item => {
    carousel.insertAdjacentHTML('beforeend', item.outerHTML);
})

arrow.forEach(btn => {
    btn.addEventListener('click', () => {
       carousel.scrollLeft += btn.id === 'left' ? -itemWidth : itemWidth
    })
})

const cursorStart = (e) => {
    isMoving = true;
    carousel.classList.add('moving')
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const moving_cursor = (e) => {
    if (!isMoving) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const cursorEnd = () => {
    isMoving = false;
    carousel.classList.remove('moving')
}

const InfiniteScroll = () => {

    if (carousel.scrollLeft === 0) {

        carousel.classList.add('no-transition')
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove('no-transition')

    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {

        carousel.classList.add('no-transition')
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove('no-transition')
    }
}



carousel.addEventListener('mousedown', cursorStart);
carousel.addEventListener('mousemove', moving_cursor);
document.addEventListener('mouseup', cursorEnd);
carousel.addEventListener('scroll', InfiniteScroll);