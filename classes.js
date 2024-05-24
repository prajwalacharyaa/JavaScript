class NewClass {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get Fullname() {
        return this.firstname + " " + this.lastname;
    }
}

const myName = new NewClass("Ananymous", "Ach");
console.log("My name is " + myName.Fullname);
