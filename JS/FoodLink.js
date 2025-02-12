let Login=document.querySelector("#loginbtn");
Login.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = '/HTML/Login Page.html'
});

let Register=document.querySelector("#registerbtn");
Register.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = '/HTML/Registration.html'
});

let Scrolldown=document.querySelector("#donateusbtn");
let ToScrolldown=document.querySelector(".donation");
Scrolldown.addEventListener("click",function(event){
    event.preventDefault();
    ToScrolldown.scrollIntoView({behavior:"smooth"});
})


let Reg=document.querySelector("#fddonatebtn");
Reg.addEventListener('click', function(event){
    event.preventDefault();
    let name=document.querySelector("#fdname").value
    let mobile=document.querySelector("#fdmobile").value
    let address=document.querySelector("#fdaddress").value
    let description=document.querySelector("#fddescription").value

    if(name==="" || mobile==="" || address==="" || description===""){
        alert("All Fields are Mandatory.")
        return;
    }
    if(mobile.length!==10 || isNaN(mobile)){
        alert("Enter Valid Mobile Number.")
        return;
    }

    alert("NGO will contact you shortly")
    window.location.href = '/HTML/Donation Sucessfull.html'
});

let donatemoney=document.querySelector("#mddonatebtn");
donatemoney.addEventListener('click', function(event){
    event.preventDefault();
    let namemoney=document.querySelector("#mdname").value
    let mobile=document.querySelector("#mdmobile").value
    let amount=document.querySelector("#mdamount").value

    if(namemoney==="" || mobile==="" || amount===""){
        alert("All Fields are Mandatory.")
        return;
    }
    if(mobile.length!==10 || isNaN(mobile)){
        alert("Enter Valid Mobile Number.")
        return;
    }
    window.location.href = '/HTML/Donation Sucessfull.html'
});
