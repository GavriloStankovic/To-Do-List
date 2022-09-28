// Selectors
let todoInput = document.querySelector('.todo-input')
let todoButton = document.querySelector('.todo-button')
let todoList = document.querySelector('.todo-list')
let filterOption = document.querySelector('.filter-todo')

//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('change', filterTodo)

//Functions
function addTodo(e) {
    e.preventDefault()

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')

    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')

    todoDiv.append(
        newTodo,
        completedButton,
        trashButton
    )

    todoList.appendChild(todoDiv)

    todoInput.value = ''
}
function deleteCheck(e) {
    const item = e.target
    if (item.classList[0] === 'trash-btn') {
        item.parentElement.classList.add('fall')
        item.parentElement.addEventListener('transitionend', function () {
            item.parentElement.remove()
        })
    }
    if (item.classList[0] === 'complete-btn') {
        item.parentElement.classList.toggle('complete')
    }
}
function filterTodo(e) {
    const todos = todoList.childNodes
    console.log(todos);
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex'
                break
            case 'completed':
                if (todo.classList.contains('complete')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
                break
            case 'uncompleted':
                if(!todo.classList.contains('complete')){
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }  
                break 
        }
    })
}