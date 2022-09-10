const getElementText = (id) => {
    const element = document.getElementById(id);
    return element;
};
const clickHandler = () => {
    let inputValue = getElementText("todo-text").value;
    let haveTodo = JSON.parse(localStorage.getItem("Todo"));
    if (!haveTodo) {
        let todoList = [{ title: inputValue }];
        localStorage.setItem("Todo", JSON.stringify(todoList));
    } else {
        let todoList = [...haveTodo, { title: inputValue }];
        localStorage.setItem("Todo", JSON.stringify(todoList));
    }
    render();
};

const render = () => {
    let ul = getElementText("todo-list");
    ul.innerHTML = "";
    let todo = JSON.parse(localStorage.getItem("Todo"));
    todo.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item.title;
        li.classList.add("py-3");
        ul.appendChild(li);
    });
    // clearItems();
};

const clearItems = () => {
    localStorage.removeItem("Todo");
    render();
};

render();