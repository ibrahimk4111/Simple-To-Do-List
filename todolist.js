// getting all required elements
const todoList = document.querySelector(".showBookList");
const addBtn = document.querySelector(".addBtn");
const detailsValue = document.querySelector("#workingDetails");
const nameValue = document.querySelector("#name");

class Book {
    constructor (detailsValue, nameValue){
        this.detailsValue = detailsValue;
        this.nameValue = nameValue;
    }
}

showTasks(); //calling showTask function

addBtn.onclick = () => { //when user click on plus icon button
    event.preventDefault();
    
    if (detailsValue.value == '' || nameValue.value == '') {
        alert("fill these fields");
    } else {
        const book = new Book(detailsValue.value, nameValue.value);
        storeBook();
        books.push(book); //pushing or adding new value in array
    }
   

    localStorage.setItem("books", JSON.stringify(books)); //transforming js object into a json string
    showTasks(); //calling showTask function
};

function storeBook() {
    let getLocalStorageData = localStorage.getItem("books");
    if(getLocalStorageData == null){
        books = [];
    }else{
        books = JSON.parse(getLocalStorageData); 
    }
    return books;
};

function showTasks() {
    storeBook();
    let newLiTag = "";
    books.forEach((element, index) => {
        newLiTag += `
        <tr class="bodyRow">
            <td>${element.detailsValue}</td>
            <td class="complete" onclick="completed()">${element.nameValue}</td>
            <td class="close" onclick="closeBtn(${index})">x</td>
        </tr>
        `;
    });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
    detailsValue.value = '';
    nameValue.value = '';
};

function closeBtn(index) {
    const books = JSON.parse(localStorage.getItem("books"));
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    showTasks();
};

function completed() {
    // const nameData = document.querySelector(".complete");
    event.target.previousElementSibling.classList.toggle("lineThrough");
}
