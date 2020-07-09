const form = document.querySelector("#add-quest-form");
const modalToHide = document.querySelector('#modal');
const overlayToHide = document.querySelector('#overlay');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let mentorId = sessionStorage.getItem("id");
    const data = `title=${this.title.value}&imageSrc=${this.imageSrc.value}&description=${this.description.value}&price=${this.price.value}&mentorsId=${mentorId}`;
    
    closeUsedModal(modalToHide, overlayToHide);

    console.log(data);
    setAward(data);
});

function setAward(data) {
    fetch("http://localhost:8003/mentors/addQuest",
        {
            mode: 'no-cors',
            method: "POST",
            body: data
        })
        .then(function (response) {
            console.log(response);
            console.log(data);
            location.reload();
        });
}

function closeUsedModal(modalToClose, overlayToClose) {
    if (modalToClose == null) return;
    modalToClose.classList.remove('active');
    overlayToClose.classList.remove('active');
}