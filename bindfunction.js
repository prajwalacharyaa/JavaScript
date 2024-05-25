const person = {
    firstName: "john",
    lastName: "Doe",
    display:function(){
    console.log("Welcome "+this.firstName+" "+this.lastName); 
    
    }
}
let display = person.display.bind(person);
setTimeout(display, 3000);