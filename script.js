const button = document.getElementById('btn');

const onButtonClick = ()=>{
   const name = document.getElementById('name').value;
   const age = document.getElementById('age').value;
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

    if(name && age && email && password){
        
        if(password.length < 8){
            console.log('Password should contain 8 letters');
        }
        
        if(Number(age) < 18){
            console.log('You have to be at least 18 years old');
        }
        
        if(!email.includes('@')){
            console.log('Email should contain @ sign');
        }
        
        if(email.includes('@') && (Number(age) >= 18) && password.length >= 8){
            console.log(name, age, email, password);
        }

    }else{
        console.log("Please fill all the imputs");
    }
   
}

button.addEventListener('click', onButtonClick)