// IEFE
(() => {
    // state variables
    let toDoListArray = [];
    // ui variables
    const form = document.querySelector(".form");
    const input = form.querySelector(".form__input");
    const ul = document.querySelector(".toDoList");
  
    // event listeners
    form.addEventListener('submit', e => {
      // prevent default behaviour - Page reload
      e.preventDefault();
      // give item a unique ID
      let itemId = String(Date.now());
      // get/assign input value
      let toDoItem = input.value;
      //pass ID and item into functions
      addItemToDOM(itemId , toDoItem);
      addItemToArray(itemId, toDoItem);
      // clear the input box. (this is default behaviour but we got rid of that)
      input.value = '';
    });
  
    ul.addEventListener('click', e => {
      let id = e.target.getAttribute('data-id')
      if (!id) return // user clicked in something else
      //pass id through to functions
      removeItemFromDOM(id);
      removeItemFromArray(id);
    });
  
    // functions
    function addItemToDOM(itemId, toDoItem) {
      // create an li
      const li = document.createElement('li')
      li.setAttribute("data-id", itemId);
      // add toDoItem text to li
      li.innerText = toDoItem
      // add li to the DOM
      ul.appendChild(li);
    }
  
    function addItemToArray(itemId, toDoItem) {
      // add item to array as an object with an ID so we can find and delete it later
      toDoListArray.push({ itemId, toDoItem});
      console.log(toDoListArray)
    }
  
    function removeItemFromDOM(id) {
      // get the list item by data ID
      var li = document.querySelector('[data-id="' + id + '"]');
      // remove list item
      ul.removeChild(li);
    }
  
    function removeItemFromArray(id) {
      // create a new toDoListArray with all li's that don't match the ID
      toDoListArray = toDoListArray.filter(item => item.itemId !== id);
      console.log(toDoListArray);
    }
  
  })();



//   time/date
function showTime() {
    var datediv = document.getElementById("myDateDisplay");
    var timediv = document.getElementById("myClockDisplay");
    
    var dt = new Date();
    var d = dt.getDate();
    var m = dt.getMonth() + 1; // getMonth() returns the month "index" starting with 0 for Jan
    var y = dt.getFullYear();
    var hh = dt.getHours();
    var mm = dt.getMinutes();
    var ss = dt.getSeconds();
    var session = "AM";
    if (hh == 0) {
      hh = 12;
    }
  
    if (hh > 12) {
      hh = hh - 12;
      session = "PM";
    }
  
    d = (d < 10) ? "0" + d : d;
    m = (m < 10) ? "0" + m : m;
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    timediv.textContent = hh + ":" + mm + ":" + ss + " " + session;
    datediv.textContent = m + "/" + d + "/" + y;
    setTimeout(showTime, 1000);
  }
  
  showTime();

