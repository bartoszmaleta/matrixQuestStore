const form = document.querySelector("#add-award-form");
const modalToHide = document.querySelector('#modal');
const overlayToHide = document.querySelector('#overlay');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let mentorId = sessionStorage.getItem("id");
    // name=zxc&surname=serverS&login=qweasd&password=pass&email=bartosz.maleta@gmail.com&roleId=2&avatarPath=../wwwqw
    const data = `title=${this.title.value}&imageSrc=${this.imageSrc.value}&description=${this.description.value}&price=${this.price.value}&mentorsId=${mentorId}`;
    
    closeUsedModal(modalToHide, overlayToHide);

    console.log(data);
    setAward(data);
});

function setAward(data) {
    fetch("http://localhost:8003/mentors/addAward",
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