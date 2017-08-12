// Call add_one_car_per_day with empty array and 10 days
var cars = [];
var numDays = 10;
var getNewCar = {"city": "Toronto", "passengers": 0, "gas": 100,}

// add_one_car_per_day loops through number of days (10)
function addOneCarPerDay(cars, numDays) {
for(i = 0; i < numDays; i++) {
  cars.push(getNewCar);
  console.log("Adding new car to fleet. Fleet size is now " + cars.length + ".")}
}
addOneCarPerDay(cars, numDays)

// new_car equals get_new_car (10 cars, Toronto, etc, zero passengers)


// Run add_car method, which puts a new car into the cars array and posts confirmation and size of fleet
// function addCar(cars, newCar) {
//   cars.push(newCar;)
//   console.log("Adding new car to fleet. Fleet size is now " + cars.length" .")
// }

// Calls command_fleet method, which runs act method


// act method checks distance between cites, gas level, num of passengers


// if gas is lower than 20, they run fill_up_gas method


// fill_up_gas method replaces old gas level to 100 and displays message


// If passengers are less than 3 run pick_up_passenger method


// pick_up_passenger method adds one passenger to count, drops gas by 10, displays message


// if gas is less than distance_between_cities, fill up, posts message


// Sets previous_passengers to passengers in car, then resets to zero and posts message


// Iterates through next loop, repeating number of times passed in add_one_car_per_day method
