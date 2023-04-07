function generatePassword(length, useSpecialChars, useMixedCase) {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let password = "";
    if (useMixedCase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (useSpecialChars) {
      chars += "!@#$%^&*()_+";
    }
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  function generateLogin(length) {
    let login = "";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < length; i++) {
      login += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return login;
  }

  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let loginLength = document.querySelector("#login-length").value;
    let passwordLength = document.querySelector("#password-length").value;
    let useSpecialChars = document.querySelector("#use-special-chars").checked;
    let useMixedCase = document.querySelector("#use-mixed-case").checked;

    let password = generatePassword(passwordLength, useSpecialChars, useMixedCase);
    let login = generateLogin(loginLength);

    alert("Логин: " + login + "\nПароль: " + password);
  });

  document.querySelector("#copy-login-button").addEventListener("click", function(event) {
    event.preventDefault();
    let loginLength = document.querySelector("#login-length").value;

    let login = generateLogin(loginLength);

    navigator.clipboard.writeText(login).then(function() {
      alert("Логин скопирован в буфер обмена!");
    }, function() {
      alert("Не удалось скопировать логин в буфер обмена.");
    });
  });

  document.querySelector("#copy-password-button").addEventListener("click", function(event) {
    event.preventDefault();
    let passwordLength = document.querySelector("#password-length").value;
    let useSpecialChars = document.querySelector("#use-special-chars").checked;
    let useMixedCase = document.querySelector("#use-mixed-case").checked;
    let password = generatePassword(passwordLength, useSpecialChars, useMixedCase);

  navigator.clipboard.writeText(password).then(function() {
    alert("Пароль скопирован в буфер обмена!");
  }, function() {
    alert("Не удалось скопировать пароль в буфер обмена.");
  });
});