const container = document.querySelector(".container");
const myId = sessionStorage.getItem('id');

function getQuests() {
    console.log(myId);
    fetch(`${apiUrl}/mentors/myQuests/${myId}`)
    // fetch(`${apiUrl}/mentors/myQuests/2`)
        .then(function(response){
            return response.json();
        })
        .then(function(quests){
            innerQuests(quests)

        })
}

function innerQuests(quests) {
    let table = document.createElement("table");
    table.innerHTML = "<tr><th>ID</th><th>TITLE</th><th>DESCRIPTION</th><th>PRIZE</th><th>CREATOR</th></tr>";
    container.appendChild(table);

    quests.forEach(quest => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${quest.id}</td>
            <td>${quest.title}</td>
            <td>${quest.description}</td>
            <td>${quest.price}</td>
            <td>${quest.mentorNameAndSurname}</td>
        `;
        table.appendChild(row);
    });
}

getQuests();