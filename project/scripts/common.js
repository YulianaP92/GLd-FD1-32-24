function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function closeSendForm() {
  document.getElementById("sendForm").style.display = "none";
}

function sendForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("sendForm").style.display = "block";
}

function expandMenu() {
  let ul = document.querySelector(
    "body > div > header > div > div > div > nav > ul"
  );
  if (ul.style.display == "block") {
    ul.style.display = null;
  } else {
    ul.style.display = "block";
  }

  var ancor = document.querySelector(
    "body > div > header > div > div > div > nav > a.menu-trigger"
  );

  if (ancor.classList.contains("active")) {
    ancor.classList.remove("active");
  } else {
    ancor.classList.add("active");
  }
}
