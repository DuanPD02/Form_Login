function validateForm() {
     const fname = document.getElementById("FName").value;
     const lname = document.getElementById("LName").value;
     const address = document.getElementById("Address").value;
     const phone = document.getElementById("Phone").value;
     const email = document.getElementById("exampleFormControlInput1").value;
     const fname_error = document.getElementById("fname_error");
     const lname_error = document.getElementById("lname_error");
     const address_error = document.getElementById("address_error");
     const phone_error = document.getElementById("phone_error");
     const email_error = document.getElementById("email_error");
     let pass = document.getElementById("Pass");
     let pass_error = document.getElementById("pass_error");
     let pass1 = pass.toString();
    if(!fname){
      fname_error.innerHTML= "Khong duoc de trong first name";
    }
    if(fname){
      fname_error.innerHTML= "";
    }
    if(!lname){
      lname_error.innerHTML= "Khong duoc de trong last name";
    }
    if(lname){
      lname_error.innerHTML= "";
    }
    if(!address){
      address_error.innerHTML="Khong duoc de trong address";
    }
    if(address){
      fname_error.innerHTML="";
    }
    if(!phone){
      phone_error.innerHTML="Khong duoc de trong Phone";
    }
    if(phone){
      phone_error.innerHTML="";
    }
    if(!email){
     email_error.innerHTML="Khong duoc de trong Phone";
    if(email){
      email_error.innerHTML="";
    }
    if(pass1.length < 8){
      pass_error.innerHTML="Pass khong duoc nho hon 8 ky tu";
    }else{
      pass_error="";
    }
}





























//let lname = document.forms["Form_login"]["Lname"].value;
//let  fname = document.forms["Form_login"]["FName"].value;

//let validate = document.forms["Form_login"]["validate"].value;
//let validate = document.getElementById("validate").value;
//  let flag = true;
//     if (fname == null || fname == "") {
//         flag = true
//       //alert("First name must be filled out");
//     } else {
//       flag = fail;
//     }

//     if (lname == null || lname == "") {
//        flag=true
//     }else{
//       flag=false;
//     }
//         return flag;
//     /*} else if (isNaN(validate) || validate != 6) {
//         alert("You're either a spammer or can't add");
//       return false;
//     }*/
//  // alert('ok, redirect to https://nguyenvanhieu.vn');
//   //window.location.href = "https://nguyenvanhieu.vn";
//   if(flag==true){
//   }else{
//     console.log("Moi ban nhap lai thong tin");
//   }
 