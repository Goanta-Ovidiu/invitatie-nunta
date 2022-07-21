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

const count = document.querySelector("#count");

const config = {
  birthdate: "Aug 19, 2022",
  name: "Wedding 🤍",
};

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date(`${config.birthdate} 00:00:00`).getTime();
setInterval(function () {
  let now = new Date().getTime();
  let distance = countDown - now;

  document.querySelector("#day").innerText = Math.floor(distance / day);
  document.querySelector("#hour").innerText = Math.floor(
    (distance % day) / hour
  );
  document.querySelector("#minute").innerText = Math.floor(
    (distance % hour) / minute
  );
  document.querySelector("#second").innerText = Math.floor(
    (distance % minute) / second
  );
});
