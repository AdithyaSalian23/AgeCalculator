 const btnE1 = document.getElementById("btn");
 const birthdayE1 = document.getElementById("birthday");
 const resultE1 = document.getElementById("result");

 function calculateAge() {
    const birthdayValue = birthdayE1.value;
    if (birthdayValue === "") {
        alert("Please enter your date of birth");
    } 
    else{
        const age = getAge(birthdayValue);
        resultE1.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
 }
 function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const m = currentDate.getMonth() - birthdayDate.getMonth();
 

 if (
    m < 0 ||
    (m === 0 && currentDate.getDay() < birthdayDate.getDay())
 ){
    age--;
 }
 return age;
}
btnE1.addEventListener('click', calculateAge);


