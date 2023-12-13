function generateQrCode() {
    var qrText = document.getElementById("qr-text").value;
    if (!qrText) {
        const toastLiveExample = document.getElementById('liveToast')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()
    }else{
    var size = document.getElementById("qr-size").value;
    var format = document.getElementById("qr-format").value;
    displaySections(qrText,size,format);
    }
}

function displaySections(text,size,format) {
    var qrSection = document.getElementById("qr-section");
    var spinner = document.getElementById("spinner");
    spinner.classList.remove("d-none");
    spinner.classList.add("d-flex");
    qrSection.style.display = "none";

    var link = generateQrLink(text,size,format);
    visualChanges(text,size,link);
    

    setTimeout(function () {
        spinner.classList.remove("d-flex");
        spinner.classList.add("d-none");
        qrSection.style.display = "block";
    }, 2000);
}

function generateQrLink(text,size,format) {
    var link = "https://api.qrserver.com/v1/create-qr-code/?size="+size+ "x" + size + "&margin=5&data=" + text;
    return link;
}

function visualChanges(text,size,link){
    var qrCode = document.getElementById("qr");
    var outputText = document.getElementById("output-text");
    var displaySize = document.getElementById("sizeP");
    var changeDownload = document.getElementById("download-link");

    qrCode.src = link;
    outputText.innerText = "QR for '" + text + "' is:";
    displaySize.innerHTML = size + "x" + size + " px";
    changeDownload.href = link;
}


