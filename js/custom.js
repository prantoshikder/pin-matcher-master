function generatePinCode() {
    const randomPinCode = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("generatePinCode").value = Math.round(randomPinCode);
}
// const inputPinCode = document.getElementById("generate");
// inputPinCode.addEventListener('click', function() {
//     const randomPinCode = Math.floor(1000 + Math.random() * 9000);
//     document.getElementById("generatePinCode").value = Math.round(randomPinCode);
// })


function clickButton(num) {
    document.getElementById('inputPinCode').value += num;
}

function clickClearButton() {
    document.getElementById('inputPinCode').value = "";
    document.getElementById('matchingPinCode').style.display = 'none';
    document.getElementById('matchingNotPinCode').style.display = 'none';
}

function clickBackSpaceButton() {
    const screenValue = document.getElementById('inputPinCode').value;
    document.getElementById('inputPinCode').value = screenValue.slice(0, screenValue.length - 1);
}

function submitButton() {
    const generateValue = document.getElementById('generatePinCode').value;
    const screenValue = document.getElementById('inputPinCode').value;

    if (generateValue == screenValue) {
        document.getElementById('matchingPinCode').style.display = 'block';
        document.getElementById('matchingNotPinCode').style.display = 'none';
    } else if (generateValue == "0000" || screenValue == "") {
        alert("Create a generate PIN code  then input the PIN code");
    } else {
        document.getElementById('matchingPinCode').style.display = 'none';
        document.getElementById('matchingNotPinCode').style.display = 'block';

        const trialAction = document.getElementById('trialAction').innerText;
        const trial = parseInt(trialAction);
        const trialLimit = trial - 1;

        document.getElementById('trialAction').innerText = trialLimit + " " + "try left";
        document.getElementById('trialAction').style.display = "block";

        if (trialLimit == 0) {
            document.getElementById("trialAction").innerText = 0 + "try left";
            document.getElementById("submitButton").setAttribute("disabled", "disabled");

        }
    }
}