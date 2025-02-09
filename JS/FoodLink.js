let Login=document.querySelector("#Login");
Login.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = '/HTML/Login Page.html'
});

let Register=document.querySelector("#button2");
Register.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = '/HTML/Registration.html'
});

let Scrolldown=document.querySelector("#button3");
let ToScrolldown=document.querySelector(".master");
Scrolldown.addEventListener("click",function(event){
    event.preventDefault();
    ToScrolldown.scrollIntoView({behavior:"smooth"});
})


let Reg=document.querySelector("#reg");
Reg.addEventListener('click', function(event){
    event.preventDefault();
    let name=document.querySelector("#name").value
    let mobile=document.querySelector("#mobile").value
    let address=document.querySelector("#address").value
    let description=document.querySelector("#description").value

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

let donatemoney=document.querySelector("#donatemoney");
donatemoney.addEventListener('click', function(event){
    event.preventDefault();
    let namemoney=document.querySelector("#namemoney").value
    let mobile=document.querySelector("#mobile").value
    let amount=document.querySelector("#amount").value

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
