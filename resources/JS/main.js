// How to use it button

function inf() {
  document.getElementById('rule1').innerHTML = '1.   Keep it short, and prioritaze daily.';
  document.getElementById('rule2').innerHTML = '2.   Separate home and work (and school, and kids, and everything else).';
  document.getElementById('rule3').innerHTML = '3.   Keep it accessible. All the time.';
  document.getElementById('rule4').innerHTML = '4.   Identify and separate distracting ideas from actual tasks.';
  document.getElementById('rule5').innerHTML = '5.   Do the most important things first.';
};


// Enter button

document.body.onkeyup = function(enter) {
  if (enter.keyCode == 13) {
    addNewElement();
  }
};


// Create a close button and append it to each list item

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

  // A close symbol

  let span = document.createElement('span');
  let symbol = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(symbol);
  newItem.appendChild(span);

  // Deleting the current item

  span.addEventListener('click', function(e) {
    newItem.parentNode.removeChild(newItem);
  }, false);




}