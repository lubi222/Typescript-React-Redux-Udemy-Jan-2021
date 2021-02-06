export { };
const profile = {
    name: "alex",
    age: 20,
    coords: {
        lat: 0,
        lng: 15,
    },
    setAge(age: number): void {
        this.age = age;
    },
};

// we expect the value on the right to have a property age which is a number
const { age }: { age: number } = profile;

const {
    coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
