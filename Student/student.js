class Student {
    constructor(fName, lName, fullName, dob, age, semCgpa, finalCgpa, semGrade, finalGrade, yearOfEnroll, yearOfPassing, noOfYearsToPass) 
    {
        this.fName = fName
        this.lName = lName
        this.fullName = fullName;
        this.dob = dob
        this.age = age
        this.semCgpa = semCgpa
        this.finalCgpa = finalCgpa
        this.semGrade = semGrade
        this.finalGrade = finalGrade
        this.yearOfEnroll = yearOfEnroll
        this.yearOfPassing = yearOfPassing
        this.noOfYearsToPass = noOfYearsToPass

    }

    static createStudent(firstName, lastName, dob, finalCgpa, yearOfEnroll, noOfYearsToPass) 
    {
        const fullName = firstName + lastName;
        let newStudent = Student(fName, lName, fullName, dob, age, semCgpa, finalCgpa, semGrade, finalGrade, yearOfEnroll, yearOfPassing, noOfYearsToPass)

        return newStudent
    }

    // update function 
    updateFirstname(newFirstname) 
    {
        this.fName = newFirstname
    }
    updateLastName(newlastname) 
    {
        this.lName = newlastname
    }

    updateDob(newdob) 
    {
        this.dob = newdob
    }
    updateAge(newAge) 
    {
        this.age = newAge
    }
    updateSemCgpa(newSemcgpa) 
    {
        this.semcgpa = newSemcgpa
    }
    updatefinalCgpa(newFinalCgpa) 
    {
        this.finalCgpa = newFinalCgpa
    }
    updateSemGrade(newSemGrade) 
    {
        this.semGrade = newSemGrade
    }
    updateFinalGrade(newFinalGrade) 
    {
        this.finalGrade = newFinalGrade
    }
    updateYearOfEnroll(newyearOfEnroll)
    {
        this.yearOfEnroll = newyearOfEnroll
    }
    updateYearOfPassing(newyearOfPassing) 
    {
        this.yearOfPassing = newyearOfPassing
    }
    updateYearToPass(newNoOfYearsToPass) 
    {
        this.noOfYearsToPass = newNoOfYearsToPass
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

            case "Semcgpa": this.updateSemCgpa(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "finalCgpa": this.updatefinalCgpa(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "semGrade": this.updateSemGrade(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "semCgpa": this.updateSemCgpa(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "yearOfEnroll": this.updateYearOfEnroll(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "yearOfPassing": this.updateYearOfPassing(value)
                return `${propertyToUpdate} Updated with ${value}`

            default: return "Wrong Property"

        }
    }

    //Display functions 
    displayFullName() {
        let fullname = this.fName + this.lName
        console.log("Full Name is : " + fullname)

    }
    displayFinalCgpa(finalCgpa) {
        let tempcgpa = 0;
        for (let i = 0; i < finalCgpa.length; i++) {
            tempcgpa += semCgpa[i];
        }
        return tempcgpa / 8;
    }

    displaySemGrade(finalCgpa) {
        let tempSemGrade = [];
        for (let i = 0; i < finalCgpa.length; i++) {
            if (finalCgpa[i] >= 9) {
                tempSemGrade[i] = "A";
            } else if (finalCgpa[i] >= 7) {
                tempSemGrade[i] = "B";
            } else if (finalCgpa[i] >= 6) {
                tempSemGrade[i] = "C";
            } else if (finalCgpa[i] >= 5) {
                tempSemGrade[i] = "D";
            } else {
                tempSemGrade[i] = "F";
            }
        }
        return tempSemGrade;
    }

    displayFinalGrade(finalCgpa) {
        let fGrade = "";
        if (finalCgpa >= 9) {
            fGrade = "A";
        } else if (finalCgpa >= 7) {
            fGrade = "B";
        } else if (finalCgpa >= 6) {
            fGrade = "C";
        } else if (finalCgpa >= 5) {
            fGrade = "D";
        } else {
            fGrade = "F";
        }
        return fGrade;
    }

    displayNoOfYearOfPassing() {
        let ans = this.yearOfPassing - this.yearOfEnroll
        console.log("Number of years to graduate is :" + ans)
    }

}

const avisha = new createStudent('avi', ' jain', '24/08/2000', [9, 8, 9, 9, 10, 9, 8, 9], 2019, 2022)
//console.log("Details of student are as follows")
console.log(avisha)
avisha.displayFullName()
avisha.displayNoOfYearOfPassing()

