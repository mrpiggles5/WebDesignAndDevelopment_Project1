let currentStep = 0; 
showStep(currentStep); 

function showStep(n) {
    let steps = document.getElementsByClassName("form-step");
    for (let step of steps) {
        step.classList.remove("active");
    }
    steps[n].classList.add("active");

    let progressBarFill = document.getElementById("progress-bar-fill");
    progressBarFill.style.width = (n + 1) * 25 + "%";
}

function nextPrev(n) {
    let steps = document.getElementsByClassName("form-step");
    if (n === 1 && !validateForm()) return false; 
    steps[currentStep].classList.remove("active");
    currentStep += n;
    if (currentStep >= steps.length) {
        currentStep = steps.length - 1;
        if (validateSummaryConditions()) {
            showSummary(); 
        } else {
            alert("Please fill out the necessary contents.");
        }
    } else {
        showStep(currentStep);
    }
}
// Used too make sure the user fills out everything that is neccesarry.
function validateForm() {
    let valid = true;
    let inputs = document.getElementsByClassName("form-step")[currentStep].getElementsByTagName("input");
    for (let input of inputs) {
        if (input.required && !input.value) {
            valid = false;
            input.style.border = "2px solid red"; 
        } else {
            input.style.border = ""; 
        }
    }
    return valid;
}

function validateSummaryConditions() {
    let termsChecked = document.getElementById("terms").checked;

    let adultsCount = parseInt(document.getElementById("adults").value, 10);

    let nameFilled = document.getElementById("contact-name").value.trim() !== "";

    return termsChecked && adultsCount > 1 && nameFilled;
}

function showSummary() {

    document.getElementById("summary-date").textContent = document.getElementById("date").value;
    document.getElementById("summary-adults").textContent = document.getElementById("adults").value;
    document.getElementById("summary-children").textContent = document.getElementById("children").value;
    document.getElementById("summary-contact-name").textContent = document.getElementById("contact-name").value;
    document.getElementById("summary-email").textContent = document.getElementById("email").value;
    document.getElementById("summary-ticket-color").textContent = document.getElementById("ticket-colour").value;
    let locker = document.querySelector('input[name="locker"]:checked').value;
    document.getElementById("summary-locker").textContent = locker === "yes" ? "Yes" : "No";
    document.getElementById("multi-step-form").classList.add("hidden");
    document.getElementById("booking-summary").classList.remove("hidden");
}
/*___________________________________________________________________________________________________________*/

document.addEventListener("DOMContentLoaded", function () {
    startBanner();
});

function openAd() {
    window.open('https://www.greatjourneysnz.com/', '_blank');
}

function replayAd(event) {
    event.stopPropagation(); 
    startBanner();
}

function startBanner(){
    const ad2 = document.querySelector('.ad2');
    const scene1 = ad2.querySelector('.scene1');
    const scene2 = ad2.querySelector('.scene2');
    const scene3 = ad2.querySelector('.scene3');
    const circle = ad2.querySelector('#circle');

    scene1.style.display = 'block';
    scene2.style.display = 'none';
    scene3.style.display = 'none';
    circle.style.display = 'none'; 

    setTimeout(() => {
        scene1.style.display = 'none';
        scene2.style.display = 'block';
        scene3.style.display = 'none';
    }, 5000); 

    setTimeout(() => {
        scene2.style.display = 'none';
        scene3.style.display = 'block';
        circle.style.display = 'block'; 
    }, 10000); 
    }