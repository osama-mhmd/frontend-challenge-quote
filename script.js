async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    document.querySelector(".advice-number").innerHTML = advice.slip.id;
    document.querySelector("p").innerHTML = advice.slip.advice;
  } catch {
    document.querySelector("p").innerHTML = "Connections time out";
  }
}

getAdvice();
