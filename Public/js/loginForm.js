const form = document.querySelector("#login-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `email=${this.email.value}&password=${this.password.value}`;

    console.log('qwe')
    console.log(data);
    console.log('qwe2')

    getUser(data);
});
function clicking() {
    
}

function getUser(data) {
    fetch(`${apiUrl}/login)`,
    {
        // mode: 'no-cors',
        method: "POST",
        body: data
    })
    .then(function (response) {
        console.log('before data')
        console.log(data) // email=linux@&password=pass
        console.log('after data')
        // console.log(response);
        // console.log(response.json());
        let user = response.json();
        console.log(user);
        return user;
    })
    .then(function (user) {
        console.log(user);
        console.log("name:");
        console.log(user.name);
        console.log(user.role);
        if (user.role == 'ADMIN') {
            console.log('I am admin');
            window.open("admin/homepage.html");
        } else if (user.role == 'MENTOR') {
            console.log('I am mentor');
            window.open("mentor/homepage.html");
        } else if (user.role == 'STUDENT') {
            console.log('I am student');
            window.open("student/homepage.html");
        } else {
            console.log('I am noone!')
        }
        // displayUser(user)
    });

}
// function displayUser(loggedUser) {
//     prompt(loggedUser.name);
// }
