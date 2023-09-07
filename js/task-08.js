const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const emailEl = event.currentTarget.elements.email.value;
  const passwordEl = event.currentTarget.elements.password.value;
  if (!emailEl || !passwordEl) {
    alert("please fill the fields");
  } else {
    const formDataObj = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };

    console.log(formDataObj);

    formEl.reset();
  }
}
