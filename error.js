const message = "This is the new error message";
let x = ""
try { 
    if(x.trim() == "")  throw "is empty";
    if(isNaN(x)) throw " This is not a number";
    x = Number(x);
    if(x > 10)   throw "is too high";
    if(x < 5)  throw "is too low";
  }
  catch(err) {
    console.log("Error is: "+err);
  }
  finally {
    console.log("");
  }