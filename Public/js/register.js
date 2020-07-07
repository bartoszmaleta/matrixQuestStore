// TODO: "#register-form" to work with register simple register form
// TODO: "#register-form2" to work with register popup register form
const form = document.querySelector("#register-form2");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // name=zxc&surname=serverS&login=qweasd&password=pass&email=bartosz.maleta@gmail.com&roleId=2&avatarPath=../wwwqw
    const data = `name=${this.name.value}&surname=${this.surname.value}&login=${this.login.value}&password=${this.password.value}&email=${this.email.value}&roleId=${this.role.value}&avatarPath=${this.avatarPath.value}`;
    
    console.log(data);
    setUser(data);
});

function setUser(data) {
    fetch("http://localhost:8003/register",
        {
            mode: 'no-cors',
            method: "POST",
            body: data
        })
        .then(function (response) {
            console.log(response);
            console.log(data);
        });
}

