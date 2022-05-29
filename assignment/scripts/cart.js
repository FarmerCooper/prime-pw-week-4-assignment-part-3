console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

var basket = [];

function addItem(value, array) {
     basket.push(value);
          for (let i=0; i<basket.length; i++){
               if (value === basket[i]){
                    return true;
               }
}    
                 return false;
}

addItem("Cessna", basket);
console.log("Basket should have Cessna", basket);

addItem("Lockeheed Martin")
addItem("Boeing")
console.log("Should have Lockheed Martin and Boeing", basket)

console.log("Adding Northrup Grumman, should be true", addItem('Northrup Grumman'));
//console.log(addItem("Checking if Airbus has been added (I expect false)", "Airbus", basket))

function listItems(){
     for (let i=0; i<basket.length; i++);{
          console.log(basket.join('\r\n'));
     }
}

listItems();

function empty(){
     basket.length = 0;
     console.log(basket);
}

empty();