const button = document.getElementById('btn');

const onButtonClick = ()=>{
   const name = document.getElementById('name').value;
   const age = document.getElementById('age').value;
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   const errorWrapper = document.getElementById("error-wrapper");
   errorWrapper.innerHTML = "";

   if (name && age && email && password) {
     if (!email.includes("@")) {
       const errorWrapper = document.getElementById("error-wrapper");
       const error = document.createElement("div");
       error.innerHTML = "Email should contain @ sign";
       errorWrapper.append(error);
     }

     // if (!Number(age) || Number(age) < 18) {
     if (Number(age) < 18) {
       const errorWrapper = document.getElementById("error-wrapper");
       const error = document.createElement("div");
       error.innerHTML = "You have to be at least 18 years old";
       errorWrapper.append(error);
     }

     if (!Number(age)) {
       const errorWrapper = document.getElementById("error-wrapper");
       const error = document.createElement("div");
       error.innerHTML = "Please type a number inside age input";
       errorWrapper.append(error);
     }

     if (password.length < 8) {
       const errorWrapper = document.getElementById("error-wrapper");
       const error = document.createElement("div");
       error.innerHTML = "Password should contain 8 letters";
       errorWrapper.append(error);
     }

     if (email.includes("@") && Number(age) >= 18 && password.length >= 8) {
       console.log(name, age, email, password);

       const successWrapper = document.getElementById("success-wrapper");
       successWrapper.innerHTML = "Validation successfull";
     }
   } else {
     const errorWrapper = document.getElementById("error-wrapper");
     errorWrapper.innerHTML = "Please fill all the inputs";
   }
   
}

button.addEventListener('click', onButtonClick)