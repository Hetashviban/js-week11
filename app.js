document.addEventListener('DOMContentLoaded', function() {
    // Get references to HTML elements
    const list = document.getElementById('shoppingList');
    const input = document.getElementById('item');
    const button = document.getElementById('addItemBtn');
  
    // Add event listener for the "Add item" button
    button.addEventListener('click', addItem);
  
    // Add event listener for the entire list using event delegation
    list.addEventListener('click', function(event) {
      // Check if the clicked element is a button inside a list item
      if (event.target.tagName === 'BUTTON') {
        // If yes, delete the corresponding list item
        deleteItem(event.target.parentNode);
      }
    });
  
    // Function to handle adding a new item to the list
    function addItem() {
      // Get the value from the input field
      const myItem = input.value;
      
      // Check if the input is not empty
      if (myItem.trim() === '') {
        // If empty, show an alert and return
        alert('Please enter a valid item.');
        return;
      }
  
      // Clear the input field
      input.value = '';
  
      // Create a new list item and append it to the list
      const listItem = createListItem(myItem);
      list.appendChild(listItem);
  
      // Set focus back to the input field
      input.focus();
    }
  
    // Function to create a new list item with text and delete button
    function createListItem(itemText) {
      const listItem = document.createElement('li');
      const listText = document.createElement('span');
      const listBtn = document.createElement('button');
  
      listItem.appendChild(listText);
      listText.textContent = itemText;
      listItem.appendChild(listBtn);
      listBtn.textContent = 'Delete';
  
      return listItem;
    }
  
    // Function to delete a list item
    function deleteItem(item) {
      list.removeChild(item);
    }
  });
  