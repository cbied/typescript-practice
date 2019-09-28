interface IPerson {
    name: string;
    city: string;
    age: number;
    printDetails(): void;
    anotherFunc(a:number, b:number): number;
}

const tom: IPerson = {
    name: "Tom",
    city: "Munich",
    age: 33,
    printDetails: function() {
    console.log(`${this.name} - ${this.city}`);
    },
    anotherFunc: function(a,b) {
        return a + b
    }
};