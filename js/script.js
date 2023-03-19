// cvladebi

const emailInput = document.getElementById("emailInput");
const mainBtn = document.getElementById("main-button");
const errorP = document.getElementById("error")


// regex
let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;


// function

function validMail(input) {
    if(mailRegex.test(input.value)) {
        console.log("This is true");  
        errorP.style.display = "none";
        mainBtn.style.backgroundColor = "#B3FFE2";
    } else if (!mailRegex.test(input.value)) {
        console.log("false");
        errorP.style.display = "block";
        mainBtn.style.backgroundColor = "#B3FFE2";
    }
}


mainBtn.addEventListener("click", (Event) => {
    event.preventDefault();
    validMail(emailInput);
})