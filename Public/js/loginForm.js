const form = document.querySelector("#login-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `email=${this.email.value}&password=${this.password.value}`;
    getUser(data);
});
function clicking() {
    
}

function getUser(data) {
    fetch(`${apiUrl}/login`,
    {
        // mode: 'no-cors',
        method: "POST",
        body: data
    })
    .then(function (response) {
        let user = response.json();
        return user;
    })
    .then(function (user) {
        if (user === null) {
            console.log('null');
        }
        user === null ? location.reload() : saveDetailsToSession(user);
        window.location.replace(`${user.role.toLowerCase()}/homepage.html`);
    });
}

function saveDetailsToSession(loggedUser) {
    sessionStorage.setItem('id', loggedUser.id);
    sessionStorage.setItem('role', loggedUser.role);
}


// TRAINING storages
// sessionStorage.setItem('name', 'Bob');
// sessionStorage.getItem('name');
// console.log(sessionStorage.getItem('name'));
// localStorage.removeItem('name');



// ---------------------------------- OLD, with console.logs();
// const form = document.querySelector("#login-form");

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const data = `email=${this.email.value}&password=${this.password.value}`;
//     console.log(data);
//     getUser(data);
// });
// function clicking() {
    
// }

// function getUser(data) {
//     fetch(`${apiUrl}/login`,
//     {
//         // mode: 'no-cors',
//         method: "POST",
//         body: data
//     })
//     .then(function (response) {
//         console.log('before data')
//         console.log(data) // email=linux@&password=pass
//         console.log('after data')
//         let user = response.json();
//         console.log(user);
//         return user;
//     })
//     .then(function (user) {
//         console.log(user);
//         console.log("name:");
//         console.log(user.name);
//         console.log(user.role);
//         console.log(user.id);
//         if (user.role == 'ADMIN') {
//             console.log('I am admin');
//             sessionStorage.setItem('id', user.id);
//             sessionStorage.setItem('role', user.role)
//             window.location.replace("admin/homepage.html");
//         } else if (user.role == 'MENTOR') {
//             console.log('I am mentor');
//             sessionStorage.setItem('id', user.id);
//             sessionStorage.setItem('role', user.role)
//             window.location.replace("mentor/homepage.html");
//         } else if (user.role == 'STUDENT') {
//             console.log('I am student');
//             sessionStorage.setItem('id', user.id);
//             sessionStorage.setItem('role', user.role)
//             window.location.replace("student/homepage.html");
//         } else {
//             console.log('I am noone!')
//         }
//     });

// }