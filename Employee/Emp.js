class Employee {
    constructor(firstName, lastName, fullName, dob, age, salaryPM, annualSal, empId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.dob = dob;
        this.age = age;
        this.salaryPM = salaryPM;
        this.annualSal = annualSal;
        this.empId = empId;
    }

    static #ageCalulate(dob)
    {
        const yearOfBirth = new Date(dob);
        return 2022-yearOfBirth.getFullYear(); 
    }

    static createNewEmployee(fullName, dob, salaryPM, empId)
    {
        let splitName = fullName.split(" ");
        let firstName = splitName[0];
        let lastName = splitName[1];

        let annualSal = salaryPM * 12;

        let age = Employee.#ageCalulate(dob);

        let tempEmployee = new Employee(firstName, lastName, fullName, dob, age, salaryPM, annualSal, empId);
        return tempEmployee;
    }

    
}

const avisha = Employee.createNewEmployee("Avisha Jain","25 May 2000", 100000, "1001");
console.log(avisha)
