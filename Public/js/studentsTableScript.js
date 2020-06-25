const container = document.querySelector(".container");

function getStudents() {
    fetch(`http://localhost:8003/students`)
        .then(function(response){
            return response.json();
        })
        .then(function(students){
            innerStudents(students)

        })
}

function innerStudents(students) {
    let table = document.createElement("table");
    table.innerHTML = "<tr><th>ID</th><th>NAME</th><th>SURNAME</th><th>LOGIN</th><th>PASSWORD</th><th>EMAIL</th><th>ROLE</th><th>TRANSACTIONS</th><th>AVATAR PATH</th></tr>";
    container.appendChild(table);

    students.forEach(student => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${student.login}</td>
            <td>${student.password}</td>
            <td>${student.email}</td>
            <td>${student.role}</td>
            <td>${student.transactions}</td>
            <td>${student.avatar}</td>
        `;
        table.appendChild(row);
    });
}

getStudents();