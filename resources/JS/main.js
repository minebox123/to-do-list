// Variables:

let deleteAll = document.createElement('span'); //  trash button
const addButton = document.querySelector('#btn');
let storageArray = localStorage.getItem('newTask') ? JSON.parse(localStorage.getItem('newTask')) : [];
const data = JSON.parse(localStorage.getItem('newTask'));


// 'How to use it' button
const button = document.querySelector('button');

button.addEventListener('click', event => {

  const using = document.querySelector('.how_to_use_it')
  if (using.style.display === 'none') {
    using.style.display = 'flex';
  } else {
    using.style.display = 'none';
  }
}, false);



// Enter button

document.body.onkeyup = function(enter) {
  if (enter.keyCode == 13) {
    addNewElement();
  }
};



// A to-do list

function addNewElement() {
  let newItem = document.createElement('LI');
  let userInp = document.getElementById('userInput').value;
  let textNode = document.createTextNode(userInp);

  newItem.appendChild(textNode);
  if (userInp == '') {
    return alert('Please, type something!');
  } else {
    document.getElementById('list').appendChild(newItem);
  }
  document.getElementById('userInput').value = '';

  // Setting up a localStorage.

  localStorage.setItem('newTask', JSON.stringify(storageArray));
  storageArray.push(userInp);
  localStorage.setItem('newTask', JSON.stringify(storageArray));

  // A close symbol

  let closeSymbol = document.createElement('span');
  let symbol = document.createTextNode('\u00D7');
  closeSymbol.className = 'close';
  closeSymbol.appendChild(symbol);
  newItem.appendChild(closeSymbol);

  // An input checkbox object

  let labCont = document.createElement('label'); // a container that contains input and span.
  labCont.className = 'container';
  let checkbox = document.createElement('input'); // a checkbox input.
  checkbox.setAttribute('type', 'checkbox');
  let sp = document.createElement('span'); // a span tag.
  sp.className = 'checkmark';
  labCont.appendChild(checkbox);
  labCont.appendChild(sp);

  textNode.before(labCont); // Adding the labCont before textNode.

  // Deleting the current item

  closeSymbol.addEventListener('click', function() {
    newItem.parentNode.removeChild(newItem);
    localStorage.removeItem('newTask');
  }, false);

  // making a line-through/none text decoration.

  checkbox.addEventListener('click', function() {
    if (checkbox.checked == true) {
      newItem.style.textDecoration = 'line-through';
    } else if (checkbox.checked == false) {
      newItem.style.textDecoration = 'none';
    }
  });

};

// Saved tasks.

data.forEach(item => {

  let newItem = document.createElement('LI');
  let userInp = item;
  let textNode = document.createTextNode(userInp);
  newItem.appendChild(textNode);
  document.getElementById('list').appendChild(newItem);


  // checkbox.

  let labCont = document.createElement('label'); // a container that contains input and span.
  labCont.className = 'container';
  let checkbox = document.createElement('input'); // a checkbox input.
  checkbox.setAttribute('type', 'checkbox');
  let sp = document.createElement('span'); // a span tag.
  sp.className = 'checkmark';
  labCont.appendChild(checkbox);
  labCont.appendChild(sp);

  textNode.before(labCont); // Adding the labCont before textNode.

  checkbox.addEventListener('click', function() {
    if (checkbox.checked == true) {
      newItem.style.textDecoration = 'line-through';
    } else if (checkbox.checked == false) {
      newItem.style.textDecoration = 'none';
    }
  });

  deleteAll.addEventListener('click', event => {
    localStorage.clear();
    newItem.parentNode.removeChild(newItem);
  })

});

// the 'delete all' button

let buttonName = document.createTextNode('');
deleteAll.appendChild(buttonName);
deleteAll.className = 'deleteAll';
let user = document.getElementById('userInput');
user.before(deleteAll);
user.style.marginRight = '30px';
addButton.style.position = 'relative';
addButton.style.right = '20px'

//eleteAll.addEventListener('click', function() {
//  localStorage.clear();
//});