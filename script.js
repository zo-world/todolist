let list = [];
let itemNum = 0;

function addItems() {
  let task = document.getElementById('textItem').value;
  if(task==""){
    alert("No task has been entered, please enter a task");
  }
  else{
    list.push(task); //adds to the list array
    displayItems();
    document.getElementById('textItem').value = "";
    updateNumberList();
  }
}

function displayItems() {
  let newItem = document.getElementById('textItem').value;
  let display = `<li id=${itemNum}>${newItem}</li>`;
  let ul = document.getElementById('items');
  ul.innerHTML += display;
  itemNum++;
}

function updateNumberList() {
  document.getElementById('listItems').innerHTML = list.length;
}