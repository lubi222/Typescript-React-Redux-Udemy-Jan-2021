export { };
const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with higher order functions
carMakers.map((car: string): string => {
    // we get help with the methods because Typescript knows we are dealing with a string
    return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), "2040-10-10"];
importantDates.push("2040-10-10");
importantDates.push(new Date());
