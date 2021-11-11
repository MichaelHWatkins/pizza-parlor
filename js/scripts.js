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


//UI Logic

function displayReceiptDetails(receiptToDisplay) {
  let receiptList = $("ol#receipt");
  let htmlForOrderInfo = "";
  Object.keys(receiptToDisplay.order).forEach(function(key) {
    const receipt = receiptToDisplay.findReceipt(key);
    htmlForOrderInfo += "<li id=" + receipt.id + ">" + receipt.name + "</li>";
  });
  receiptList.html(htmlForOrderInfo);
}
function attachContactListeners() {
  $("ol#receipt").on("click", "li", function() {
    showOrder(this.id);  
  });
}

let newReceipt = new Receipt();
$(document).ready(function() {
  attachReceiptListeners();
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
    displayReceiptDetails(newReceipt);
    $("#output").text("Cost: $" + newReceipt.totalCost );
  });
});