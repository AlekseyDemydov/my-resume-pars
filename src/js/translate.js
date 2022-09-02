const select = document.querySelector(".change-lang");
const allLang = ["en", "ua"];

select.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;

  location.href = window.location.pathname + "#" + lang;
  location.reload();
}
function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  let placeholder = "";
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  select.value = hash;

  for (let key in langArr) {
    document.querySelector(".lng-" + key).innerHTML = langArr[key][hash];
  }
  const placeName = document.querySelector(".lng-name");
  const placeNumber = document.querySelector(".lng-number");
  const placeText = document.querySelector(".lng-textarea");
  const btnSendMe = document.querySelector(".lng-btnSendMe");
  btnSendMe.addEventListener("click", e => {
    const conditionName =
      hash === "en" ? "enter your name" : "введіть своє ім я";
    placeName.placeholder = conditionName;

    const conditionNumber =
      hash === "en" ? "enter your number" : "введіть свій номер";
    placeNumber.placeholder = conditionNumber;

    const conditionText =
      hash === "en" ? "enter your message" : "введіть своє повідомлення";
    placeText.placeholder = conditionText;
  });
}
changeLanguage();
