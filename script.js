$(document).ready(function() {
  console.log("DOMContent fully loaded.");
  function addListItem() {
		$('.itemAlert').remove();
    var shoppingItem = $("#myItem").val();
    var quantity = $("#quantity").val();
    var unit= $("#unit").val();
    let price= $("#myPrice").val();
    
    //Regular expression below checks for digits, used for error checking the shoppingItem
    // \d+ checks for one or more digits and 'g' means global, checking for all occurreances of a digit
    var digits = /\d+/g;
    if (shoppingItem === '') {
			$('#unit').after('<p class="itemAlert">You must enter something !</p>');
    } /* No item entered */
    else if(shoppingItem.match(digits)){
			$('#unit').after('<p class="itemAlert">Not an item, please try again .</p>');
    }/* If there is any digit in the shoppingItem string, warning is displayed*/
    else {
      if((quantity >= 1)) {
        if(unit === ' ') {
            $("#myUL").append("<li> <input type='checkbox' name='done' class='itemDone'/>  " + quantity + ' ' + unit + shoppingItem + '      RM' + price +"<button class='delete'> x </button> </li>" );
            $("#myBudget").append("<li> "  + ' ' + shoppingItem + '      RM' + price + "<button class='delete'> x </button> </li>" );
         }
     else {
        $("#myUL").append("<li> <input type='checkbox' name='done' class='itemDone'/>  " + quantity + ' ' + " ( "+ unit +" ) " + shoppingItem + '      RM' + price + " <button class='delete'> x </button> </li>" );
        $("#myBudget").append("<li class='itemPrice'>  "  + ' ' + shoppingItem  + '      RM'+ price + "<button class='delete'> x </button> </li>" );
           }  
          }  
         } 
   $("#myItem").val(''); // clean the myItem field 


  

  }

  

   function doneBuyItem() {      //strike through the item when done buying it
     
    $(this).parent().toggleClass('strike');
    $('ul#myUL').find('li.strike').appendTo('ul#myUL');
     
     
 } 

  function deleteItem(){ // removes the current  li which has the item
      $(this).parent().hide();
  }
  
  function calculate(){
    
    const allBudget = document.getElementById('budget')
    let totalPrice = 0;
    const getPrice = document.querySelectorAll('li.itemPrice')

    for(i = 0; i < getPrice.length; i++){

      totalPrice += getPrice[i].price

  }
    
  console.log(allBudget.value - totalPrice) 

  }

    //prevent the page refresh when click the submit button
    var form = document.getElementById("formBudget");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    $(function(){
    $("#calculateSubmit").on("click", calculate);/*when we click the button and item is calculate*/
    $("#add").on("click", addListItem);/*when we click the button and item is added*/
    $(document).on('click','.itemDone', doneBuyItem); /*when we click the checkbox the doneBuyItem strikes out the item and makes it red */
    $(document).on('click','.delete', deleteItem);/*when we click the small x button next to the item the deleteItem() works */
  });
  
});
