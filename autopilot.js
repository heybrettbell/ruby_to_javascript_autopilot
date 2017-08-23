// new_car equals get_new_car (10 cars, Toronto, etc, zero passengers)
// Call add_one_car_per_day with empty array and 10 days
var cars = [];
var numDays = 10;
var gasAmount = 0;
var getNewCar = {"city": "Toronto", "passengers": 0, "gas": 100};



// add_one_car_per_day loops through number of days (10)
// Run add_car method, which puts a new car into the cars array and posts confirmation and size of fleet
function addOneCarPerDay(cars, numDays) {
for(i = 0; i < numDays; i += 1) {
  cars.push(getNewCar);
  console.log("Adding new car to fleet. Fleet size is now " + cars.length + ".");}
  function commandFleet(cars) {
    var action = act(car);
    console.log("Car " + i + ":" + action);
  }
}



// Calls command_fleet method, which runs act method

// act method checks distance between cites, gas level, num of passengers
function act(car) {
var distanceBetweenCities = 50;
if(car.gas < 20){
  fillUpGas(car);
} else if (car.passengers < 3) {
  pickUpPassenger(car);
} else {
  if (car.gas < distanceBetweenCities) {
    return fillUpGas(car);
  }
  droveTo = drive(car, distanceBetweenCities);
  var passengersDropped = dropOffPassengers(car);
  console.log(droveTo + passengersDropped);
}


// // if gas is lower than 20, they run fill_up_gas method
// // fill_up_gas method replaces old gas level to 100 and displays message
 function fillUpGas() {
   var oldGas = car.gas;
   car.gas = 100;
   console.log("Filled up to " + getGasDisplay(car.gas) + "on gas from " + getGasDisplay(oldGas) + ".");
 }
//
function getGasDisplay(gasAmount) {
  console.log(gasAmount);
// }
//
//
// // If passengers are less than 3 run pick_up_passenger method
// // pick_up_passenger method adds one passenger to count, drops gas by 10, displays message
function pickUpPassenger(car){
  car.passengers += 1;
  car.gas -= 10;
  console.log("Picked up passenger. Car now has " + car.passengers + " passengers.");
}
//
//
//
//
// // if gas is less than distance_between_cities, fill up, posts message
function getDestination(car) {
  if (car.city === "Toronto") {
    return "Mississauga";
} else if (car.city === "Mississauga") {
  return "London";
} else if (car.city === "Toronto") {
  return "Toronto";
}
//
// // Sets previous_passengers to passengers in car, then resets to zero and posts message
function dropOffPassengers(car) {
  var previousPassengers = car.passengers;
  car.passengers = 0;
  console.log("Dropped off " + previousPassengers() + " passengers.");
}

// Iterates through next loop, repeating number of times passed in add_one_car_per_day method
addOneCarPerDay(cars, numDays);
