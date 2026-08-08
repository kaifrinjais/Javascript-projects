let todolist = [
    {
        item: 'Buy milk',
        dueDate: '4/10/2023'
    },
    {
        item: 'Go to college',
        dueDate: '4/10/2023'
    }
];

displayitems();

function addtodo() {

    let inputElement = document.querySelector('#todoinput');
    let dateElement = document.querySelector('#tododate');

    let todoitem = inputElement.value;
    let tododate = dateElement.value;

    todolist.push({
        item: todoitem,
        dueDate: tododate
    });

    inputElement.value = '';
    dateElement.value = '';

    displayitems();
}

function displayitems() {

    let containerElement = document.querySelector('.todocontainer');

    let newHtml = '';

    for (let i = 0; i < todolist.length; i++) {

       
        let {item,dueDate} = todolist[i];

        newHtml += `
      
            <span>${item}</span>
            <span>${dueDate}</span>
            <button id="delete"  onclick="todolist.splice(${i},1); displayitems();">
                DELETE
            </button>
       
        `;
    }

    containerElement.innerHTML = newHtml;
}