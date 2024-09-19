document.addEventListener('DOMContentLoaded', function() {

    const text = document.querySelector('.form-text');
    const add_btn = document.querySelector('.form-btn');
    const ul_list = document.querySelector('.todo-list');

    // при нажатии на кнопку добавляется дело в Li
    add_btn.addEventListener('click', function(){
        if (text.value.length !== 0) {
            const task = text.value;
            text.value = '';
            createLi(task, ul_list);
        } 
    })
})

// Сама логика лишек
function createLi(task, ul_list) {
    const newLi = document.createElement('li');
    const text_task = document.createElement('p');
    text_task.textContent = task;
    newLi.append(text_task);
    
    // создание чекбокса
    const newCheckbox = document.createElement('input');
    newCheckbox.setAttribute('type', 'checkbox');
    newLi.append(newCheckbox);

    // создание кнопки редактирования
    const edit_btn = document.createElement('button');
    edit_btn.textContent = 'Edit';
    let isEditing = true;
    newLi.append(edit_btn);

    edit_btn.addEventListener('click', function(){
        
        if (isEditing) {
            text_task.setAttribute('contenteditable', 'true'); 
            isEditing = false;
            edit_btn.textContent = 'Save';
        } else {
            text_task.setAttribute('contenteditable', 'false');
            isEditing = true;
            edit_btn.textContent = 'Edit';
        }
    })

    // кнопка удаления
    const delete_btn = document.createElement('button');
    delete_btn.textContent = 'Delete';
    newLi.append(delete_btn);

    delete_btn.addEventListener('click', function() {
        newLi.style.display = 'none';
    })
    
    ul_list.append(newLi)
}