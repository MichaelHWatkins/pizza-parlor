//Business Logic

function Pizza(){
  this.toppings = [];
  this.size = "";
}

Pizza.prototype.cost = function() {
  if(this.size === "small"){
    return 5 + (this.toppings * 3);
  }
  else if(this.size === "medium"){
    return 10 + (this.toppings * 3);
  }
  else{
    return 15 + (this.toppings * 3);
  }
}
//UI Logic