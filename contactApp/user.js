let userId = 0
let contactId = 0
let contactDetailsId = 0
const allUsers = []
const allContact = []
const allContactDetails = []
// const roles = {
//     ADMIN: "Admin",
//     USER : "User"
//   };

class User {
    constructor(firstName, lastName, role) {
        this.userId = userId++
        this.firstName = firstName
        this.lastName = lastName
        this.role = role
        this.isActive=true
    }

    creatNewUser(firstName, lastName, userId) {
        if (this.role == "admin") {
            let isActive = true
            let newUser = new User(firstName, lastName, userId)
            allUsers.push(newUser)
            return [newUser,"New user is created"]
        }
        else{
            return["Permission Denied"]
        }

    }

    deleteUser(firstName) {
        if (this.role == "admin") {
            this.isActive = false
            return ["User Deleted"]
        }
        else{
            return["Permission Denied"]
        }
    }

    findUser(firstName){
        if(this.isActive==false){
            return["No user exists"]
        }
        for (let index = 0; allUsers < array.length; index++) {
            const allUserFind = allUsers[index];
            console.log(allUserFind)
            
        }
    
    }


}

class Contact {
    constructor(firstName,lastName) {
        this.contactId = contactId++
        this.firstName = firstName
        this.lastName=lastName
        this.isActive=true
    }

    createContact(contactId) {
        if (this.role == "admin" || this.role == "user") {
            let contactId = allContact[index].contactId
            const newContact = new Contact(contactId)
            allContact.push(newContact)
        }
    }

    isContactExists(firstName){
        if(this.isActive==false){
            return["no contact Exists"]
        }
        else{
            return[this.firstName + this.lastName]
        }
    }

    displayContact() {

        for (let index = 0; index < allContact.length; index++) 
        {
            const allContact = allContactDetails[index];
            console.log(allContact)

        }
    }

    deleteContact() {
        if ( this.active==false)
        {
            return[false,"no Contact"]
        }
        else{
            this.isActive=false
            return[true,"Deleted"]
        }
    }

}

class ContactDetails {
    constructor(contactDetailsId, firstName,type, value) {
        this.contactDetailsId = contactDetailsId++
        this.type = type
        this.value = value
        this.firstName=firstName
    }

    newContactDetail(contactDetailsId) {
        let ContactDetailsId = allContactDetails[index].contactDetailsId
        const newDetailsOfContact = new ContactDetails(ContactDetailsId)
        allContactDetails.push(newDetailsOfContact)
    }
}

let adminUser = new User("avisha", "jain", "admin")
console.log(adminUser)
adminUser.creatNewUser("avisha","jain",1001)

let sanket= new User("Sanket","Jain","user")
console.log(sanket)