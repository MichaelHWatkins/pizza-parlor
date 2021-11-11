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

Receipt.prototype.findReceipt = function(id) {
  if (this.order[id] != undefined) {
    return this.order[id];
  }
  return false;
};


function Pizza(toppings, size, name){
  this.toppings = toppings;
  this.size = size;
  this.name = name;
}

Pizza.prototype.cost = function() {
  if(this.size === "small"){
    console.log(this.toppings.length)
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

function displayReceiptDetails(receiptToDisplay) {
  let receiptList = $("ol#receipt");
  let htmlForOrderInfo = "";
  Object.keys(receiptToDisplay.order).forEach(function(key) {
    const receipt = receiptToDisplay.findReceipt(key);
    htmlForOrderInfo += "<li id=" + receipt.id + ">" + receipt.name + " " + receipt.toppings + " " + receipt.size + "</li>";
  });
  receiptList.html(htmlForOrderInfo);
}


let newReceipt = new Receipt();
$(document).ready(function() {
  $("#display-address-form").click(function(event) {
    event.preventDefault();
    $("#address-form").show();
  })
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    const size = $("#size").val();
    const name = $("#name").val();
    let toppingsArray = [];
    let exampleToppings = $("input:checkbox[name=toppingsInput]:checked").each(function() {
      let topping = $(this).val();
      toppingsArray.push(topping);
    });
    let newPizza = new Pizza(toppingsArray, size, name)
    newReceipt.addOrder(newPizza)
    $("ol#receipt").empty();
    displayReceiptDetails(newReceipt);
    $("#output").text("Cost: $" + newReceipt.totalCost );
  });
});