const container = document.querySelector(".container");

function getAwards() {
    fetch(`http://localhost:8003/awards`)
        .then(function(response){
            return response.json();
        })
        .then(function(awards){
            console.log('qweqwe')
            innerAwards(awards)

        })
}

function innerAwards(awards) {
    let cards = document.createElement("div");
    cards.className = "cards";
    
    console.log(cards);

    awards.forEach(award => {
        let cardElement = document.createElement("div");
        cardElement.className = "card";

        let cardTitle = document.createElement("div");
        cardTitle.className = "card-title";
        cardTitle.innerText = award.title;

        let cardImage = document.createElement("div");
        cardImage.className = "card-image";
        let img = document.createElement("img");
        console.log('img src award');
        console.log(award.imageSrc);
        img.src = "../../resoruces/awardLogo/" + award.imageSrc;
        cardImage.appendChild(img);

        let cardDescription = document.createElement("div");
        cardDescription.className = "card-description";
        cardDescription.innerText = award.description;

        let cardPills = document.createElement("div");
        cardPills.className = "card-pillPrice";

        let addButton = document.createElement("button");
        addButton.className = "add-button";
        addButton.innerText = "+";
        // addButton.id = "card-add-button";
        addEventBuyThisCard(addButton, award.id, award.price); // adds event to add buttons!


        cardPills.innerText = "cost: " + award.price + " p";

        cardElement.appendChild(cardTitle);
        cardElement.appendChild(cardImage);
        cardElement.appendChild(cardDescription);
        cardElement.appendChild(cardPills);
        cardElement.appendChild(addButton);
        cards.appendChild(cardElement);
        container.appendChild(cards);

    });

}

getAwards();
// ----------------------------------
// Buy Award:
function addEventBuyThisCard(button, cardId, awardPrice) {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(cardId);

        let studentId = sessionStorage.getItem('id');
        let dataOfCardToBuy = `cardId=${cardId}&studentId=${studentId}&price=${awardPrice}`
        
        buyAward(dataOfCardToBuy);

        console.log('buy button!!');

    })
}

function buyAward(data) {
    console.log(data);
    fetch(`${apiUrl}/awards/buy`,
        {
            mode: 'no-cors',
            method: "POST",
            body: data
        })
        .then(function (response) {
            console.log('qweqwe')

            // console.log(response);
            // console.log(data);
            location.reload();
        });
}


// ----------------------------------
// Wallet with coins:
const studentId = sessionStorage.getItem('id');

function getStudent() {
    fetch(`${apiUrl}/students/${studentId}`)
        .then(function(response){
            return response.json();
        })
        .then(function(student){
            console.log(student);
            fillWalletWithCoins(student)
        })
}

function fillWalletWithCoins(student) {
    let coins = document.getElementById('coinsUser');
    coins.innerText = student.coins;

}

getStudent();