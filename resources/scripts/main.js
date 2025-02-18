/* Variables */
var qr_submit_btn = document.querySelector("#qr_submit_btn");
var back_btn = document.querySelector("#back_btn");
var landingpage = document.querySelector("#qr_landingpage");
var qrpage = document.querySelector("#qr_generatepage");
var textfield = document.querySelector("#qrcode_textarea");
var download_btn = document.querySelector("#dwnld_btn");
var share_btn = document.querySelector("#shr_btn");

/* Eventlistener */
qr_submit_btn.addEventListener("click", generateQRCode);
back_btn.addEventListener("click", backToLanding);
download_btn.addEventListener("click", downloadQRImg);
share_btn.addEventListener("click", copyToClipboard);

/* Functions */
function generateQRCode() {
    if (textfield.value != "") {
        var qrContainer = document.getElementById("qrcode");
        qrContainer.innerHTML = "";

        const qrCode = new QRCode(document.getElementById("qrcode"), {
        text: textfield.value,
        width: 178,
        height: 178,
        });
        toggleVisibility();
    } else {
        alert("Please enter something in the textfield!");
    }
    
}

function backToLanding() {
    textfield.value = "";
    toggleVisibility();
}

function downloadQRImg() {
    var qrContainer = document.getElementById("qrcode").getElementsByTagName("img")[0];

    if (qrContainer) {
        var imgURL = qrContainer.src;
        var link = document.createElement("a");
        link.href = imgURL;
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        console.error("QR Code not found");
    }
}

async function copyToClipboard() {
    var qrContainer = document.getElementById("qrcode").getElementsByTagName("img")[0];

    if (qrContainer) {
        try {
            var response = await fetch(qrContainer.src);
            var blob = await response.blob();
            const clipBoardItem = new ClipboardItem({ "image/png" : blob })

            await navigator.clipboard.write([clipBoardItem]);
            alert("QR Code copied successfully");
        } catch (err) {
            console.error("Error while copying: ", err);
        }
    } else {
        console.error("QR Code not found");
    }
}

function toggleVisibility() {
    if (landingpage.classList.contains("vis_active")) {
        landingpage.classList.remove("vis_active");
        landingpage.classList.add("vis_inactive");
        qrpage.classList.remove("vis_inactive");
        qrpage.classList.add("vis_active");
    } else {
        landingpage.classList.add("vis_active");
        landingpage.classList.remove("vis_inactive");
        qrpage.classList.add("vis_inactive");
        qrpage.classList.remove("vis_active");
    }
}



