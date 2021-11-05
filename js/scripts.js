//Business Logic
function Receipt(){
  this.order = [];
  this.totalCost = 0;
}

Receipt.prototype.addPie = function(pie) {
  this.order.push(pie);
  this.totalCost += pie.cost();
}

function Pizza(){
  this.toppings = [];
  this.size = "";
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
    let newPizza = new Pizza();
    newPizza.size = size;
    newPizza.toppings.push(meat);
    newPizza.toppings.push(veg1);
    newPizza.toppings.push(veg2);
    newReceipt.addPie(newPizza)
    $("#output").text("Cost: $" + newReceipt.totalCost );
  });
});