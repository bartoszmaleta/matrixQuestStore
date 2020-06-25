const form = document.querySelector("#login-form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = `email=${this.name.email}&password=${this.password.value}`;

    console.log(data);
    getUser(data);
});

function setUser(data) {
    fetch("http://localhost:8003/login",
    {
        mode: 'no-cors',
        method: "POST",
        body: data
    })
    .then(function (response) {
        console.log(response);
    });
}

