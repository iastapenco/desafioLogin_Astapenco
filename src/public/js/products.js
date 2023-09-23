document.getElementById("btn-logout").addEventListener("click", function () {
  fetch("http://localhost:8080/api/sessions/logout", {
    method: "GET",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("HUbo un error en la solicitud");
    } else {
      sessionStorage.clear();
      window.location.href = "/api/sessions/login";
    }
  });
});

const dataUser = JSON.parse(sessionStorage.getItem("dataUser"));

if (dataUser != {}) {
  const alert = document.getElementById("alert");
  const div = document.createElement("div");
  div.setAttribute(
    "class",
    "alert alert-info text-center fs-4 alert-dismissible fade show"
  );
  div.setAttribute("role", "alert");
  div.setAttribute("id", "messageWelcome");
  const strong = document.createElement("strong");
  strong.innerText = `¡Bienvenido ${dataUser.data.first_name} ${dataUser.data.last_name} a nuestro coffe shopp online!`;
  div.appendChild(strong);
  const buttonClose = document.createElement("button");
  buttonClose.setAttribute("class", "btn-close");
  buttonClose.setAttribute("type", "button");
  buttonClose.setAttribute("data-bs-dismiss", "alert");
  buttonClose.setAttribute("aria-label", "Close");
  div.appendChild(buttonClose);
  alert.appendChild(div);

  const btnLogout = document.getElementById("btn-logout");
  btnLogout.innerHTML = `<button
  type="button"
  id="btn-logout"
  class="btn btn-danger position-absolute position-absolute top-0 start-100 translate-middle"
>Logout</button>`;
}
