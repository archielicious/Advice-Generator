async function getApi() {
  let promise = await fetch("https://api.adviceslip.com/advice");
  let responseData = await promise.json();
  return responseData;
}

let diceBtn = document.getElementById("dice-btn");
let cardHeaderText = document.getElementById("card-header-text");
let cardText = document.getElementById("card-body-text");
let imgElementDesktop = document.getElementById("img-element-desktop");
let imgElementMobile = document.getElementById("img-element-mobile");

async function randomAdvice() {
  let randomAdviceData = await getApi();
  console.log(randomAdviceData);
  cardHeaderText.innerText = `ADVICE \u00A0\u00A0 #${randomAdviceData.slip.id}`;
  cardText.innerText = `"${randomAdviceData.slip.advice}"`;
  imgElementDesktop.src = "images/pattern-divider-desktop.svg";
  imgElementMobile.src = "images/pattern-divider-mobile.svg";
}

document.addEventListener("DOMContentLoaded", randomAdvice);
diceBtn.addEventListener("click", randomAdvice);
