class University{
    constructor(college){
        this.collegename = college;
    }

    studying(){
        return "I am studying in"+" "+this.collegename ;
    }
}

// const colzname = new University ("Orchid College");
// console.log(colzname.studying());

class Faculty extends University{
    constructor(college, faculty){
        super(college);
         this.faculty = faculty;

    }
    show(){
        return this.studying() + " "+"My faculty is "+this.faculty;
    }
}

let myDetail = new Faculty("Orchid International College.", "BIM.");
console.log(myDetail.show());