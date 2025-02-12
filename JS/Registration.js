let Register = document.querySelector("#registerbtn");

Register.addEventListener("click", function (event) {
    event.preventDefault(); 

    let NGOName = document.querySelector("#NGOname").value;
    let Address = document.querySelector("#address").value;
    let Mobile = document.querySelector("#mobile").value;
    let Email = document.querySelector("#email").value;
    let PAN = document.querySelector("#PANID").value;
    let Trust = document.querySelector("#trustID").value;
    let DARPAN = document.querySelector("#DARPANID").value;
    if (NGOName === "" || Address === "" || Mobile === "" || Email === "" || PAN==="" || Trust==="" ) {
        alert("All Fields are Mandatory.");
        return;
    }
    if (Mobile.length !== 10 || isNaN(Mobile)) {
        alert("Enter a Valid Mobile Number.");
        return;
    }
    if (PAN.length !== 10 ) {
        alert("Enter a Valid PAN Number.");
        return;
    }
    alert("Registration successful! Your login details will be sent to your email shortly.");
    window.location.href = "/FoodLink.html";
});
