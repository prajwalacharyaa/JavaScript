let age = "8";

let voteable = (age < 18) ? "Too young to vote":"Old enough to vote";
console.log(voteable);

drinkable = Number(age);
if(isNaN(age)){
    drinkable = "The Input is not a number";
}else if(age<18){
    drinkable = "Not Old Enough to drink";
}else{
    drinkable="Old enough to drink";
}
console.log(drinkable);