//push to commit on practice
const person = {
    firstname: "Ananymous",
    lastname: "Ach",
    id: 1,
    fullname: function(){
        return this.firstname+" "+this.lastname;
        
    }
}
console.log(person.fullname());
