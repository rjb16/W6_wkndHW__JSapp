document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit); //listener for the form submit

    const deleteAll = document.querySelector('#delete-all');
    deleteAll.addEventListener('click', handleDeleteAllClick);
});
  

  const handleFormSubmit = function(event) {
    event.preventDefault(); //stops page refresh
  
    const hallOfFame = document.querySelector('#hall-of-fame'); 
    const newItem = document.createElement('li'); //creates new li element 
    newItem.textContent = `${event.target.first_name.value} ${event.target.last_name.value},
    ${event.target.category.value}`;
    
    //gives it a class of item
    newItem.classList.add('item'); 
    
  
    hallOfFame.appendChild(newItem);
  
    //resets after each submission
    document.getElementById('new-item-form').reset();
 };

 const handleDeleteAllClick = function() {
     const list = document.querySelector('#hall-of-fame');
     list.innerHTML = '';
 }

