// Название сайта
const title_head = document.querySelector('.title-head');

// Название сайта в футере
const footer_title = document.querySelector('.footer_list_title');

// категории вакансий
const vacancy = document.querySelectorAll('.box3_list-item');
const group_img = document.querySelector('.box3-group_img');
const img_background = document.querySelectorAll('.box3-img_background');
const img_catogory = document.querySelectorAll('.box3-img');

// ОТЗЫВЫ
const cart_feedback = document.querySelectorAll('.box6-item');
const circle_under_feed = document.querySelectorAll('.circle-for-feedback');

// смена одной буквы в заголовке на красную
title_head.innerHTML = title_head.textContent.replace('O', '<span style="color: #EE4F3C;;">O</span>');

footer_title.innerHTML = footer_title.textContent.replace('O', '<span style="color: #EE4F3C;;">O</span>');

vacancy.forEach((vac, index) => {
    vac.addEventListener('mouseover', function(){ 
        img_background[index].style.background = '#EE4F3C';
        let pathImg = img_catogory[index].src;
        let newPath = pathImg.replace(/\.([^.]+)$/, '_white.\$1');
        img_catogory[index].src = newPath;
        img_catogory[index].style.zIndex = '100';
    })

    vac.addEventListener('mouseout', function(){ 
        img_background[index].style.background = '#FFF8F8';
        let pathImg = img_catogory[index].src;
        let newPath = pathImg.replace('_white', '');
        img_catogory[index].src = newPath;

    })
})

circle_under_feed.forEach((circle, index) => {
    circle.addEventListener('click', function() {
        const startIndex = index*3;
        const endIndex = startIndex+3;
        cart_feedback.forEach((cart, index_cart) => {
            if (index_cart >= startIndex && index_cart < endIndex) {
                cart.classList.add('visible');
                cart.classList.remove('hidden')
            } else {
                cart.classList.remove('visible')
                cart.classList.add('hidden');
            }
        })
    })
})

circle_under_feed.forEach(circle => {
    circle.addEventListener('mouseover', function() {
        circle.style.backgroundColor = '#EE4F3C';
    })

    circle.addEventListener('mouseout', function() {
        circle.style.backgroundColor = '#ffe6e6';
        circle.style.transition = 'background-color 0.5s';
    })
})