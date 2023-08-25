let qrContainer = document.querySelector(".container-qr");
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText')

// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example 
function generateQR() {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    qrContainer.classList.add("show-image")
}

function handleEnterKey(event) {
    if (event.key === "Enter") {
        generateQR();
    }
}