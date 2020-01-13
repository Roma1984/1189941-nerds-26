
    var link = document.querySelector(".modal");
    var popup = document.querySelector(".popup");

    var close = popup.querySelector(".modal-close");

    var form = popup.querySelector("form");

    var login = popup.querySelector("[name=login]");

    var password = popup.querySelector("[name=email]");

    var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("popup-show");

      if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }

      login.focus();

});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
    popup.classList.remove("popup-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();

      popup.classList.remove("popup-error");
      popup.offsetWidth = popup.offsetWidth;

      popup.classList.add("popup-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
        popup.classList.remove("popup-error");
      }
    }
  });
