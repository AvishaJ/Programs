class Student {
    constructor(fName, lName, dob, cgpa, yearOfEnroll, yearOfPassing) {
        this.fName = fName
        this.lName = lName
        this.dob = dob
        this.cgpa = cgpa
        this.yearOfEnroll = yearOfEnroll
        this.yearOfPassing = yearOfPassing

    }

    static createStudent(fullName,age,finalCgpa,semGrade,finalGrade,noOfYearsPassing)
    {
        let newStudent = Student(fName, lName, dob, cgpa, yearOfEnroll, yearOfPassing)
        return newStudent
    }

    // update function 
    updateFirstname(newFirstname) {
        this.fName = newFirstname
    }
    updateLastName(newlastname) {
        this.lName = newlastname
    }
    updateDob(newdob) {
        this.dob = newdob
    }
    updateCgpa(newcgpa) {
        this.cgpa = newcgpa
    }
    updateYearOfEnroll(newyearOfEnroll) {
        this.yearOfEnroll = newyearOfEnroll
    }
    updateYearOfPassing(newyearOfPassing) {
        this.yearOfPassing = newyearOfPassing
    }

    // wrapper Funstion of update 
    update(propertyToUpdate, value) {
        switch (propertyToUpdate) {
            case "firstName": this.updateFirstname(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "lastName": this.updateLastName(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "dob": this.updateDob(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "cgpa": this.updateCgpa(value)
                return `${propertyToUpdate} Updated with ${value}`
            
            case "yearOfEnroll": this.updateYearOfEnroll(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "yearOfPassing": this.updateYearOfPassing(value)
                return `${propertyToUpdate} Updated with ${value}`

            default: return "Wrong Property"

        }
    }
    //Display functions 
    displayFullname() {
        console.log(`${this.firstName} ${this.lastName} `)
    }
    
    displayAge(){


    }
    displayFinalCgpa(){
        this.cgpa= cpga[0]+
    }
    displaySemGrade(){}
    displayFinalGrade(){}

    displayNoOfYearOfPassing()
    {
        let ans = this.yearOfPassing - this.yearOfEnroll
        console.log("Number of years to graduate is :" + ans)
    }
    
}
const avisha = new Student('avi', ' jain', '24/08/2000', [9, 8, 9, 9, 10, 9, 8, 9], 2019, 2022)
    console.log("Details of student are as follows")
    console.log(avisha)