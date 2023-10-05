
const todoList = document.getElementById('todo-list');
const todoForm=document.getElementById('todo-form')
const titleInput=document.getElementById('title')

function addToDoItem(title) {
    const listItem = document.createElement('li');
    listItem.textContent = title;
    todoList.appendChild(listItem);
    
    listItem.addEventListener('click',()=>{
        listItem.remove()
    })
}

todoForm.addEventListener('submit', function (e) {
    e.preventDefault(); 
    const title = titleInput.value
    addToDoItem(title);
});





