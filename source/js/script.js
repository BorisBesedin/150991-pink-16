var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var form = document.querySelector(".form");
var successPopup = document.querySelector(".popup-success");
var failurePopup = document.querySelector(".popup-failure");
var email = document.querySelector("[name=e-mail]");
var userName = document.querySelector("[name=first-name]");
var surname = document.querySelector("[name=surname]");
var popupOK = document.querySelector(".popup__button--ok");
var popupClose = document.querySelector(".popup__button--close");
var submit = document.querySelector(".form__submit");

navMain.classList.remove("main-nav--nojs");
navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove('main-nav--opened');
  }
});

submit.addEventListener("click", function(evt) {
  if (!userName.value || !surname.value || !email.value) {
    failurePopup.classList.add("popup--show");
  } else {
    successPopup.classList.add("popup--show");
  }
});

popupClose.addEventListener("click", function() {
  successPopup.classList.remove("popup--show");
});

popupOK.addEventListener("click", function() {
  failurePopup.classList.remove("popup--show");
});
