

$(document).ready(function() {
  console.log("DOMContent fully loaded.");
  function addListItem() {
		$('.itemAlert').remove();
    var shoppingItem = $("#myItem").val();
    var quantity = $("#quantity").val();
    var unit= $("#unit").val();
    let price= $("#myPrice").val();
    let totalPrice = 0;
    
    // \d+ checks for one or more digits and 'g' means global, checking for all occurreances of a digit
    var digits = /\d+/g;
    //this is if else statement is to check the shopping Item index
    //if the shopping input is empty, it will show the error message
    if (shoppingItem === '') {
			$('#unit').after('<p class="itemAlert">You must enter something !</p>');
    } 
    // this else if is means when user type digit or number in the shopping input, it will show the error message also
    else if(shoppingItem.match(digits)){
			$('#unit').after('<p class="itemAlert">Not an item, please try again .</p>');
    }
    // this else mean the shopping item input is type correctly
    // when the user type correct item Name, quantity, unit, and price, it will append the the UL list and Budget list
    // the UL list is a to-do list 
    // the Budget list is for user to calculate their budget.
    else {
      if((quantity >= 1)) {
        if(unit === ' ') {
            $("#myUL").append("<li> <input type='checkbox' name='done' class='itemDone'/>  " + quantity + ' ' + unit + shoppingItem + '      RM' + price +"<button class='delete'> x </button> </li>" );
            $("#myBudget").append("<li> "  + ' ' + shoppingItem + '      RM' + price + "<button class='delete'> x </button> </li>" );
            totalPrice += price
            console.log(totalPrice)
         }
     else {
        $("#myUL").append("<li> <input type='checkbox' name='done' class='itemDone'/>  " + quantity + ' ' + " ( "+ unit +" ) " + shoppingItem + '      RM' + price + " <button class='delete'> x </button> </li>" );
        $("#myBudget").append("<li class='itemPrice'>  "  + ' ' + shoppingItem  + '      RM'+ price + "<button class='delete'> x </button> </li>" );
        
           }  
          }  
         } 
    // this is to empty the shopping input to input, once the user add the item

   $("#myItem").val('');  

   
  

  }

  
//this function is for the to do list
// when user click the checkbox, and add strike class for the checked box
// the shopping item will have an effect 'strike' (CSS)
   function doneBuyItem() {      //strike through the item when done buying it
     
    $(this).parent().toggleClass('strike');
    // this is feature 1 
    // when user click the checkbox, it will sorted the list
    $('ul#myUL').find('li.strike').appendTo('ul#myUL');
     
     
 } 
//this function is for all the list
//when the user hit the x 'remove X', it will delete the shopping list item
  function deleteItem(){ 
      $(this).parent().remove();
  }
  
  function calculate(){
    
    const allBudget = document.getElementById('budget')
    let totalPrice = 0;
    const getPrice = document.getElementsByClassName('itemPrice')
    
    

    for(let i = 0; i < getPrice.length; i++){

      let getNumber = getPrice[i].textContent
      let eachPrice = getNumber.match(/\d+/);
      totalPrice += parseInt(eachPrice)

  }
    
  let result = allBudget.value - totalPrice

  console.log(result)

  if(result < 0){

    alert('You need more money')

  }else{

    alert('Buy now')

  }

  }

    //this function 82-85 line is to prevent the page refresh when click the submit button
    var form = document.getElementById("formBudget");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    $(function(){
    $("#calculateSubmit").on("click", calculate);/*when user click the button and item is calculate*/
    $("#add").on("click", addListItem);/*when user click the button and item is added*/
    $(document).on('click','.itemDone', doneBuyItem); /*when user click the checkbox the doneBuyItem strikes out the item and makes it red */
    $(document).on('click','.delete', deleteItem);/*when user click the small x button next to the item the deleteItem() works */
  });
  
});
