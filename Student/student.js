class Student {
    constructor(firstName, lastName, fullName, dob, age, semCGPA, finalCgpa, semGrade, finalGrade, yearOfEnroll, yearOfPassing, noOfYearsToGraduate) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.dob = dob;
        this.age = age;
        this.semCGPA = semCGPA;
        this.finalCgpa = finalCgpa;
        this.semGrade = semGrade;
        this.finalGrade = finalGrade;
        this.yearOfEnroll = yearOfEnroll;
        this.yearOfPassing = yearOfPassing;
        this.noOfYearsToGraduate = noOfYearsToGraduate;
    }

    static createNewStudent(firstName, lastName, dob, semCGPA, yearOfEnroll, yearOfPassing) 
    {
        let fullName = firstName +" "+ lastName;

        let noOfYearsToGraduate = Student.#noOfYearsToGraduate(yearOfPassing,yearOfEnroll);

        let age = Student.#age(dob);

        let finalCgpa = Student.#finalCgpa(semCGPA);

        let semGrade = Student.#semGrade(semCGPA);

        let finalGrade = Student.#finalGrade(semCGPA);

        let tempStud = new Student(firstName, lastName, fullName, dob, age, semCGPA, finalCgpa, semGrade, finalGrade, yearOfEnroll, yearOfPassing, noOfYearsToGraduate)

        return tempStud
    }

    static #noOfYearsToGraduate(yearOfPassing,yearOfEnroll)
    {
        return  yearOfPassing - yearOfEnroll;
    }

    static #age(dob)
    {
        const yearOfBirth = new Date(dob);
        return 2022-yearOfBirth.getFullYear(); 
    }
    static #semGrade(semCGPA)
    {
        let tempSemGarde=[]
       for(let i=0; i<semCGPA.length; i++)
        {
            if (semCGPA[i]>=9)
            {
                tempSemGarde[i]='A'
            }
            else if(semCGPA[i]>=7 && semCGPA[i]<9) 
            {
                tempSemGarde[i]='B'
            }
            else if(semCGPA[i]>=5 && semCGPA[i]<7) 
            {
                tempSemGarde[i]='C'
            }
            else if(semCGPA[i]>=4 && semCGPA[i]<5) 
            {
                tempSemGarde[i]='D'
            }
            else 
            {
                tempSemGarde[i]='F'
            }
        } 
        return tempSemGarde;
    }


    static #finalCgpa(semCGPA){
        let sumOfCgpa=0;
        for(let i=0; i<semCGPA.length; i++)
        {
            sumOfCgpa+=semCGPA[i];
        }
        let avgOfCgpa  = sumOfCgpa/semCGPA.length;
        return avgOfCgpa;
    }


    static #finalGrade(semCGPA){
        let sumOfCgpa=0, avgOfGrade, avgofCgpa =0;
        for(let i=0; i<semCGPA.length; i++)
        {
            sumOfCgpa+=semCGPA[i];
        }
        avgofCgpa  = sumOfCgpa/semCGPA.length;
        if (avgofCgpa >=9) 
            {
                avgOfGrade='A'
            }
            else if(avgofCgpa >=7 && avgofCgpa <9) 
            {
                avgOfGrade='B'
            }
            else if(avgofCgpa >=5 && avgofCgpa <7) 
            {
                avgOfGrade='C'
            }
            else if(avgofCgpa >=4 && avgofCgpa <5) 
            {
                avgOfGrade='D'
            }
            else {
                avgOfGrade='F'
            };
        return avgOfGrade;
    }


    displayFullName() {
        console.log(`${firstName} ${lastName} `);
    }

    displayYearOfEnroll() {
        console.log(`${this.yearOfEnroll} `);
    }

    displayDOB() {
        console.log(`${this.dateOfBirth} `);
    }

    updateFirstname(newFirstname) {
        this.firstName = newFirstname;
        this.fullName = this.firstName +" "+ this.lastName;
    }

    updateLastName(newlastname) {
        this.lastName = newlastname;
        this.fullName = this.firstName +" "+ this.lastName;
    }

    updateDOB(newdob) {
        this.dob = newdob;
        this.age = Student.#age(newdateOfBirth);
    }
    
    updateYearOfEnroll(newYearOfEnroll) {
        this.yearOfEnroll = newYearOfEnroll;
        this.noOfYearsToGraduate = this.yearOfPassing - this.yearOfEnroll;
    }

    updateYearOfPassing(newYearOfPassing) {
        this.yearOfPassing = newYearOfPassing;
        this.noOfYearsToGraduate = this.yearOfPassing - this.yearOfEnroll;
    }

    update(propertyToUpdate, value) {
        switch (propertyToUpdate) {
            case "firstName": 
                this.updateFirstname(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "lastName": 
                this.updateLastName(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "dob": 
                this.updateDOB(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "yearOfEnroll": 
                this.updateYearOfEnroll(value)
                return `${propertyToUpdate} Updated with ${value}`

            case "yearOfPassing": 
                this.updateYearOfPassing(value)
                return `${propertyToUpdate} Updated with ${value}`

            default: return "Wrong Property"

        }
    }
}
const avi = Student.createNewStudent("Avisha", "Jain", "25 May 2000", [9,9,8,7,6,8,9,10] , 2019, 2022)
console.log(avi)
avi.update("semCGPA",[9,9,9,6,7,9,7,6])
console.log(avi)