let Register = document.querySelector("#Registerbtn");

Register.addEventListener("click", function (event) {
    event.preventDefault(); 

    let NGOName = document.querySelector("#NGOName").value;
    let Address = document.querySelector("#Address").value;
    let Mobile = document.querySelector("#Mobile").value;
    let Email = document.querySelector("#Email").value;
    let PAN = document.querySelector("#PAN").value;
    let Trust = document.querySelector("#Trust").value;
    let DARPAN = document.querySelector("#DARPAN").value;
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
    window.location.href = "/HTML/FoodLink.html";
});
