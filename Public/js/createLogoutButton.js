function createLogoutButton() {
    const container = document.querySelector(".container");

    let logoutButt = document.createElement("div");
    logoutButt.className = "logoutbutton";
    
    logoutButt.setAttribute("onclick","clearSessionDetails();");

    let loginPageA = document.createElement("a");
    loginPageA.href = "../login.html";

    let logoutImg = document.createElement("img");
    logoutImg.src = "../../resoruces/logoutbutton.png";


    logoutButt.appendChild(loginPageA);
    loginPageA.appendChild(logoutImg);

    container.appendChild(logoutButt);
}

createLogoutButton();