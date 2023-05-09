let form = document.querySelector('form');

form.addEventListener('submit', function(e){
   e.preventDefault();
   let username = this[0];
   let password = this[1];
   let email = this[2];
   let phone = this[3];

   if(username.value == "") {
      addError("Username" , username);
   } else{
      console.log(username.value)
   };

   if(password.value == "") {
      addError("Password" , password);
   } else{
      console.log(pass.value)
   };

   if(email.value == "") {
      addError("email", email );
   }else{
      console.log(email.value)
   };

   if(phone.value == ""){
      addError("phone", phone);
   } else{
      console.log(phone.value)
   }

   function addError(valueName, element) {
      let errMsg = document.createElement("span");
      errMsg.setAttribute("class","err-msg");
      errMsg.innerHTML = valueName + " " + "can't be blank";
      const label = element.parentElement;
      label.appendChild(errMsg);
   }

  


})