class Vehicle {
    color: string = "red";
    constructor(color: string) {
        this.color = color;
    }

    // constructor(public color: string){} - this automatically initalises a field in the class
    protected drive(): void {
        console.log("vroom");
    }

    honk(): void {
        console.log("HONK");
    }
}

const vehicle = new Vehicle("orange");
class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        // Redirect to the base constructor
        super(color);
    }

    drive(): void {
        console.log("Vroom from vehicle!");
    }

    startDrivingProcess(): void {
        this.drive();
    }
}

// const mcQueen = new Vehicle();
// // mcQueen.drive();

const car = new Car(4, "blue");

// car.honk();
