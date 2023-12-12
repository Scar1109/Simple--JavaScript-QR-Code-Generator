function generateQrCode() {
    var qrText = document.getElementById("qr-text").value;
    if (!qrText) {
        alert("Please enter the text");
    }else{
    displaySections(qrText);
    }
}

function displaySections(text) {
    var qrSection = document.getElementById("qr-section");
    var spinner = document.getElementById("spinner");
    var outputText = document.getElementById("output-text");
    spinner.classList.remove("d-none");
    spinner.classList.add("d-flex");
    qrSection.style.display = "none";

    setTimeout(function () {
        spinner.classList.remove("d-flex");
        spinner.classList.add("d-none");
        outputText.innerText = "QR for '" + text + "' is:";
        qrSection.style.display = "block";
    }, 2000);
}