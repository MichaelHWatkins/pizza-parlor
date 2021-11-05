//Business Logic

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

$(document).ready(function() {
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
    const pizzaCost = newPizza.cost()
    $("#output").text("Cost: $" + pizzaCost + "\n" + "Size: " + newPizza.size + "\n" + "Toppings: " + newPizza.toppings);
  });
});