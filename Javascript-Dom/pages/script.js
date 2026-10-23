
let items = ["Apple", "Banana", "Cherry"];

const listElement = document.getElementById('itemList');

//
const listEl=document.querySelector('#itemList');
console.log(listEl.innerHTML);

function renderList() {
    items.forEach(itemText => {
        const li = document.createElement('li');
        li.textContent = itemText;
        listElement.appendChild(li);
    });
}

renderList();
const firstFruit = document.querySelector('#fruit-list li');

// Change its text content
firstFruit.textContent = 'Blueberry';
firstFruit.className='highlight active-state';
// add a class
firstFruit.classList.add('new-class');
//remove a class
firstFruit.classList.remove("highlight")
//toggle a class if it missing it adds ,removes if present
firstFruit.classList.toggle('active');
// custom attribute
firstFruit.setAttribute('data-item-index', '1');

//set Attribute
const image = document.querySelector('img');

image.setAttribute('alt',"thi is nature image");
//


// Change its background color
firstFruit.style.backgroundColor = 'lightblue';

const input=document.querySelector('input');
input.id="user-field";
input.placeholder="Enter your username";
input.disabled=false;

