

const form=document.getElementById("form");
const formName=document.getElementById("name");
const formPhone=document.getElementById("phone");
const formEmail=document.getElementById("email");
const formMsg=document.getElementById("textArea");
const btn=document.getElementById("submit")
const adminName=document.getElementById("adminName");
const adminPass=document.getElementById("adminPass");
const LoginBtn=document.getElementById("Btn1");




formPhone.addEventListener("input",(e)=>{
if(e.target.value>10){
  e.target.value= e.target.value.slice(0,10);
}
})
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(formEmail!="" && formName!="" && formPhone!=""){
        const email=ValidateEmail(formEmail.value)
        if(email){
           const name=formName.value;
           const email=formEmail.value;
           const phone=formPhone.value;
           const msg=formMsg.value;
           const data={
               name,email,phone,msg
           }
           formEmail.value=formMsg.value=formName.value=formPhone.value=""
           alert("Details Submitted Successfully...")
           postData(data);
        }
    }
  
})


const postData=async(data)=>{
    const postOption={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }

    const response=await fetch("/api",postOption)
    const info=await response.json();
    console.log(info)
   
}


// admin data....
const btnClick=()=>{
    const name=adminName.value;
    const pass=adminPass.value;
    if(name!="" && pass!=""){
        if(name=="jaypajji" && pass=="jay@123"){
            adminName.value=adminPass.value="";
            alert("loginSuccesFul");
            window.location.replace("/Admin")

        }
        else{
            document.getElementById("alert").innerHTML="<p>Invalid Username or Password</p>"
        }
    }
    else{
        document.getElementById("alert").innerHTML="<p>Please fill all details</p>"
    }
}