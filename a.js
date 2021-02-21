let userInput = document.getElementById('searchbar');
let addButton = document.getElementById('add-plus');
let Wrapper = document.createElement('div');
Wrapper.setAttribute('class', 'container');

addButton.addEventListener('click', addTodoListElements);

function addTodoListElements(e) {
    e.preventDefault();
    let userInputValue = userInput.value;
    userInput.value = "";
    if (userInputValue.length !== 0) {

        let innerContainer = document.createElement("div");
        innerContainer.setAttribute('class', 'innerContainer')

        let p = document.createElement('p');
        p.innerText = `${userInputValue }`;


        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'fa fa-trash delete w3-xxlarge');


        innerContainer.append(p, deleteButton);
        Wrapper.append(innerContainer);

        document.body.append(Wrapper);
    }
}

Wrapper.addEventListener('click', deleteTodoListElements);

function deleteTodoListElements(e) {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        let targetElement = e.target.parentElement; // this refers to that particular(targetted element ) button which we wanna delete
        Wrapper.removeChild(targetElement);
    }




}