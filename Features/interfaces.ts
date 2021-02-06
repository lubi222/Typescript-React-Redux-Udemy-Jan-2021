export { };
interface IVehicle {
    name: string;
    year: number;
    broken: boolean;
    // every Vehicle has to have a method summary() which returns a string
    summary(): string;
}

interface IReportable {
    summary(): string;
}

const oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    },
};

const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    },
};

const printVehicle = (vehicle: IReportable): void => {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken?: ${vehicle.broken}`);
    console.log(vehicle.summary());
};

printVehicle(oldCivic);
printVehicle(drink);
