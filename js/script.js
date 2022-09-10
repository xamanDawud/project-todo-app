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
};