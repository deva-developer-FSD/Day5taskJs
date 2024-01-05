class Person{
    constructor (firstname,lastname,age,gender,language,disability,maritalStatus)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age=age;
        this.gender=gender;
        this.language=language;
        this.disability=disability;
        this.maritalStatus=maritalStatus;
    }
}
var person = new Person("Deva", "siva", "26" , "Male", "Tamil and english", "no", "no");

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.gender);
console.log(person.language);
console.log(person.disability);
console.log(person.maritalStatus);
