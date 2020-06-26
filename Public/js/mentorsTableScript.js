const container = document.querySelector(".container");

function getMentors() {
    fetch(`${apiUrl}/mentors`)
        .then(function(response){
            return response.json();
        })
        .then(function(mentors){
            innerMentors(mentors)

        })
}

function innerMentors(mentors) {
    let table = document.createElement("table");
    table.innerHTML = "<tr><th>ID</th><th>NAME</th><th>SURNAME</th><th>LOGIN</th><th>PASSWORD</th><th>EMAIL</th><th>ROLE</th><th>AVATAR PATH</th></tr>";
    container.appendChild(table);
    console.log(mentors);

    mentors.forEach(mentor => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${mentor.id}</td>
            <td>${mentor.name}</td>
            <td>${mentor.surname}</td>
            <td>${mentor.login}</td>
            <td>${mentor.password}</td>
            <td>${mentor.email}</td>
            <td>${mentor.role}</td>
            <td>${mentor.avatar}</td>
        `;
        table.appendChild(row);
    });
}

getMentors();