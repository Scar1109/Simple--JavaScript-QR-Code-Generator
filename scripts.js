function generateQrCode() {
    var qrText = document.getElementById("qr-text").value;
    if (!qrText) {
        const toastLiveExample = document.getElementById('liveToast')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()
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
    displayQrCode(text);

    setTimeout(function () {
        spinner.classList.remove("d-flex");
        spinner.classList.add("d-none");
        outputText.innerText = "QR for '" + text + "' is:";
        qrSection.style.display = "block";
    }, 2000);
}

function displayQrCode(text) {
    var qrCode = document.getElementById("qr");
    qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&margin=5&data=" + text;
}


