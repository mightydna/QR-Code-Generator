/* Variables */
var qr_submit_btn = document.querySelector("#qr_submit_btn");
var back_btn = document.querySelector("#back_btn");
var landingpage = document.querySelector("#qr_landingpage");
var qrpage = document.querySelector("#qr_generatepage");
var textfield = document.querySelector("#qrcode_textarea");

/* Eventlistener */
qr_submit_btn.addEventListener("click", generateQRCode);
back_btn.addEventListener("click", backToLanding);

/* Functions */
function generateQRCode() {
    var qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";
    const qrCode = new QRCode(document.getElementById("qrcode"), {
        text: textfield.value,
        width: 178,
        height: 178,
      });
    toggleVisibility();
}

function backToLanding() {
    textfield.value = "";
    toggleVisibility();
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



