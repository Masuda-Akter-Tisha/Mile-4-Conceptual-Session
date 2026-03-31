console.log (document.body);
const heading = document.getElementById ('heading');

// const heading1 = document.querySelector ('#heading');
// console.log (heading1);

const paragraph = document.querySelectorAll ('#paragraph');
 console.log(paragraph);

for (let p of paragraph) {
    p.innerText = 'this is dom objects';
}

const text = document.querySelectorAll ('.text');
text[0].innerText = 'dom-object';

const clickBtn = document.getElementById ('handle');
clickBtn.addEventListener ('click', function () {
    text[0].classList.remove ('hidden');
})

// append child
const parent = document.getElementById ('text-container');

const child = document.createElement ('p');
child.innerText = 'This is a very important lessons of java script';

parent.appendChild (child);

const name = 'Rahim';
const child2 = document.createElement ('div');
child2.innerHTML = `
<p> Dom -> document object model.</p>
<p> This is ${name}</p>
`;

parent.appendChild (child2);

const child3= document.createElement ('h1');
child3.innerText = 'browser converted html file as a tree like object.';

parent.appendChild (child3);

// event delegation
const clicked = document.getElementById ('delegation');
clicked.addEventListener ('click', function (event) {
    event.target.parentNode.removeChild (event.target);
     
})

const parent2 = document.getElementById ('delegation');

const child4 = document.createElement ('h2');
child4.innerText = 'This is a child of delegation';

parent2.appendChild (child4);

// find ()

const arr = [10, 45, 30, 67, 100, 45];
const findMethod = arr.find (num => num > 45);
console.log(findMethod);

// filter ()
let array = [1, 2, 3, 7, 5, 6];
console.log (array);
const filterMethod = array.filter (i => i !== 7);
console.log(filterMethod);
array = filterMethod;
console.log ('array:',array);
