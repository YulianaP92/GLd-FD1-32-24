function bannerSwitcher() {
  let checkedValue = document.querySelector(".sec-1-input:checked");
  let next = checkedValue?.nextElementSibling;

  let isInput = next.classList.contains("sec-1-input");

  if (isInput && next != null && next != undefined) {
    checkedValue = document.querySelector(
      ".sec-1-input:checked"
    ).checked = false;
    next.checked = true;
  } else {
    let first = document.querySelectorAll(".sec-1-input")[0];
    first.checked = true;
  }
}

var bannerTimer = setInterval(bannerSwitcher, 2000);
