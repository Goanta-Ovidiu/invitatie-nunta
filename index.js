const openBtn = document.querySelector("#open");
const envelope = document.querySelector(".envelope");
const closeBtn = document.querySelector("#close");
const letter = document.querySelector(".letter");
const letterUp = document.querySelector(".letter-up");
const letterDown = document.querySelector(".letter-down");
const parintii = document.querySelector(".parintii");
const nasii = document.querySelector(".nasii");
let openEnvelope = false;
openBtn.addEventListener("click", function () {
  openBtn.style.display = "none";
  if (!openEnvelope) {
    envelope.classList.remove("close");
    envelope.classList.add("open");
    openEnvelope = true;
    letter.style.backgroundImage = "none";
  }
  setTimeout(() => {
    parintii.style.visibility = "visible";
    nasii.style.visibility = "visible";
    closeBtn.style.display = "initial";
  }, 5000);
});

closeBtn.addEventListener("click", function () {
  closeBtn.style.display = "none";
  parintii.style.visibility = "hidden";
  nasii.style.visibility = "hidden";
  if (openEnvelope === true) {
    envelope.classList.add("close");
    envelope.classList.remove("open");
    openEnvelope = false;
  }
  setTimeout(() => {
    openBtn.style.display = "initial";
  }, 5000);
});
