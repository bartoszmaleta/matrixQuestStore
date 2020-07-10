const studentId = sessionStorage.getItem('id');

function getStudent() {
    fetch(`${apiUrl}/students/${studentId}`)
        .then(function(response){
            return response.json();
        })
        .then(function(student){
            console.log(student);
            fillStudentProfile(student)
        })
}

function fillStudentProfile(student) {
    let login = document.getElementById('loginUser');
    login.innerText = student.login;

    let name = document.getElementById('nameUser');
    name.innerText = student.name;

    let surname = document.getElementById('surnameUser');
    surname.innerText = student.surname;

    let role = document.getElementById('roleUser');
    role.innerText = student.role;

    let email = document.getElementById('emailUser');
    email.innerText = student.email;

    let coins = document.getElementById('coinsUser');
    coins.innerText = student.coins;

    let module = document.getElementById('moduleUser');
    module.innerText = student.module;

    let personalMentor = document.getElementById('personalMentorUser');
    personalMentor.innerText = student.personalMentor;
}

getStudent();