class User {
    name
    age

    constructor(name, age) {
        this.name = name;
        this.age = age;

        class Child {
            name
            age
            parent
        }
    }

    get fullName() {
        return this.name + this.age;
    }

    sayHello() {
        console.log("Hello");
    }
}
