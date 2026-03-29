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

const parent = document.getElementById ('text-container');

const child = document.createElement ('p');
child.innerText = 'This is a very important lessons of java script';

parent.appendChild (child);

const child2 = document.createElement ('div');
child2.innerHTML = `
<p> Dom -> document object model.</p>
`;

parent.appendChild (child2);

const child3= document.createElement ('h1');
child3.innerText = 'browser converted html file as a tree like object.';

parent.appendChild (child3);