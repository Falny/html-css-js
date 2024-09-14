document.addEventListener('DOMContentLoaded', function() {

// Hide all books
const hide_elem = document.querySelector('.checkbox')
const books = document.querySelector('.main__books-list')
const fillPlace = document.querySelector('.fill_place')

hide_elem.addEventListener('click', function() {
    if (hide_elem.checked) {
        books.style.display = 'none';
        fillPlace.style.display = 'block'
    } else{
        books.style.display = 'flex';
        fillPlace.style.display = 'none'
    }
})

// scrolling if count books more than 3
const select_books = document.querySelector('.main__books-list');
const all_books = document.querySelectorAll('.main__books-item');

select_books.addEventListener('scroll', function() {
    if (all_books.length > 3){
        all_books.scrollIntoView({behavior: 'smooth'})
    }
})


// Delete one book

const delete_btn = document.querySelectorAll('.main__books-delete');

delete_btn.forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentElement.remove();
    })
})


// adding elements
const form_add = document.querySelector('.main-tools_add')
const add_btn = document.querySelector('.main-tools_btn')

add_btn.addEventListener('click', function() {
    const book_name = form_add.value

    if (book_name !== '') {

    const newLi = document.createElement('li');
    newLi.className = 'main__books-item';
    newLi.innerHTML = `
        <p class="main_books-book">${book_name}</p>
        <button type="submit" class="main__books-delete">Delete</button>
    `;

    newLi.querySelector('.main__books-delete').addEventListener('click', function() {
        this.parentElement.remove();
    })

    select_books.appendChild(newLi);
    form_add.value = '';
    }
})

// Search on the page

const search = document.querySelector('.search')

search.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
        const search_value = search.value.toLowerCase();
        
        all_books.forEach(book => {
            const book_name_again = book.querySelector('.main_books-book').innerText.toLowerCase();
            book.style.display = book_name_again.includes(search_value) ? 'flex' : 'none';
        })
        
        search.value = '';
    }
})
})