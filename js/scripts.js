//Business Logic
function Receipt(){
  this.order = {};
  this.orderNumber = 0;
  this.totalCost = 0;
}

Receipt.prototype.addOrder = function(pie) {
  pie.orderNumber = this.addOrderNumber();
  this.order[pie.orderNumber] = pie;
  this.totalCost += pie.cost();
}

Receipt.prototype.addOrderNumber = function() {
  this.orderNumber +=1;
  return this.orderNumber;
}

function Pizza(){
  this.toppings = [];
  this.size = "";
  this.name = "";
}

Pizza.prototype.cost = function() {
  if(this.size === "small"){
    return 5 + (this.toppings.length * 3);
  }
  else if(this.size === "medium"){
    return 10 + (this.toppings.length * 3);
  }
  else{
    return 15 + (this.toppings.length * 3);
  }
}

function attachContactListeners() {
  
}
//UI Logic

let newReceipt = new Receipt();
$(document).ready(function() {

  $("#display-address-form").click(function(event) {
    event.preventDefault();
    $("#address-form").show();
  })
 
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    const size = $("#size").val();
    const meat = $("#meat").val();
    const veg1 = $("#veg1").val();
    const veg2 = $("#veg2").val();
    const name = $("#name").val();
    let newPizza = new Pizza();
    newPizza.name = name;
    newPizza.size = size;
    newPizza.toppings.push(meat);
    newPizza.toppings.push(veg1);
    newPizza.toppings.push(veg2);
    newReceipt.addOrder(newPizza)
    $("ol#receipt").empty();
    for (let i = 1; i <= newReceipt.orderNumber; i++) {
      $("ol#receipt").append("<li id='" + newReceipt.order[i].orderNumber + "'>" + newReceipt.order[i].name + "<span id='pizza' class=" + newReceipt.order[i].orderNumber + 1 + ">"+ newReceipt.order[i].toppings[0] + ", " + 
      newReceipt.order[i].toppings[1] + ", " + newReceipt.order[i].size + " = " + newReceipt.order[i].cost() + "</span></li>");
      $("ol#receipt").on("click", "pizza", function() {
        console.log("test")
        $('#pizza').css({"display": "block"});
      });
    }
    $("#output").text("Cost: $" + newReceipt.totalCost );
  });
});