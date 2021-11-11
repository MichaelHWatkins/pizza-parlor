# _Mike's Pizza Parlor_

#### By: _**Mike Watkins**_

#### _A website that takes pizza orders._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _GitHub repositories_

## Description

_Users will enter a number and an array is returned._

## Specs
#### _Creates a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost._


## Tests
Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium", "Mike");
Expected Output: ["anchovies", "pineapple"], "medium", "Mike" 


Describe Pizza.prototype.cost()

Test: "It should return the cost of a Pizza with toppings"
Code: myPizza.cost()
Expected Output: 16

Describe: Receipt()

Test: "It should return a receipt object with a list of pizzas as a property"
Code: const newReceipt = new Receipt();
Expect Output: this.order = {}, this.orderNumber = 0, this.totalCost = 0

Describe: Receipt.prototype.addOrderNumber

Test: "It should return the number that will be the id of the order in addOrder"
Code: newReceipt.addOrderNumber()
Expected Output: 1

Describe: Receipt.prototype.addOrder

Test: "It should return nothing but add an order to the total cost
Code: newReceipt.addOrder(pie)
Expected Output: 

Describe: Receipt.prototype.findReceipt

Test: "It should return whether there is a receipt"
Code: const newReceipt.findReceipt(1)
Expected Output = True




## Setup/Installation Requirements

* _Navigate to https://github.com/MichaelHWatkins/pizza-parlor_
* _Click on the green "Code" button and copy the repository URL or click on the copy button_
* _Open the terminal on your desktop_
* _Once in the terminal, use it to navigate to your desktop folder_
* _Once inside your desktop folder, use the command "git clone https://github.com/MichaelHWatkins/pizza-parlor"_
* _After cloning the project, navigate into it using the command "cd rogers-neighborhood"_
* _Use the command "git remote" to confirm the creation of the new local repository_
* _Open the project with the code editor of your choice_
* _To run in the local browser, right click on the index.html and click the Live Server option_

_Note: when using the commands listed above, do not include the quotation marks. They are used here for readability._

## Known Bugs

* _No known bugs_

## Contact Information
_Mike Watkins, michaelhugheswatkins@gmail.com_


## License

_MIT License: https://opensource.org/licenses/MIT_

Copyright (c) _2021_ _Mike Watkins_