const userDob = document.querySelector("#user-DOB");
const userLuckyNum = document.querySelector("#user-luckyNum");
const submitButton = document.querySelector("#submit");

const outputText = document.querySelector("#output-text");


submitButton.addEventListener("click", buttonHandler)

function buttonHandler() {
    // console.log("button clicked");
    let userLuckyvalue = userLuckyNum.value;
    let userDobValue = userDob.value;

    if ((userDobValue !== "") && (userLuckyvalue !== "")) {
        if (userLuckyvalue < 1) {
            showOutputText("Input number should be greater than zero");
        } else {
            sumOfDigits(userDobValue, userLuckyvalue);
        }
    } else {
        // console.log("in else block");
        showOutputText("Enter both date of birth and lucky number.");
    }
}

function sumOfDigits(userDobValue, userLuckyvalue) {
    let newDobValue = userDobValue.replaceAll("-", "");

    let userDobSum = 0;
    for (i = 0; i < newDobValue.length; i++) {
        userDobSum = userDobSum + Number(newDobValue[i]);

        //check lucky no
        if ((userDobSum % userLuckyvalue === 0)) {

            outputText.style.display = "block";
            outputText.innerHTML = "🎉 Your birthday is lucky.";
            outputText.style.background = "";
        } else {
            outputText.style.display = "block";
            outputText.innerHTML = "😕 Your birthday is not so lucky.";
        }

    }
}

function showOutputText(msg) {
    outputText.style.display = "block";
    outputText.innerText = msg;
}