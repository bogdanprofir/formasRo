// dropdown menu
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.toggle_btn');
  const toggleBtnIcon = document.querySelector('.toggle_btn i');
  const dropdownMenu = document.querySelector('.dropdown_menu');

  toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open');

    const isOpen = dropdownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  }
});

// dropdown menu end


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// contact form FORMKEEP

// const contactForm = document.getElementById("contact-form");
// const alertBox = document.getElementById("alert");

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const formData = new FormData(contactForm);
//   const formKeepUrl = contactForm.action;

//   fetch(formKeepUrl, {
//     method: "POST",
//     body: formData,
//   })
//     .then((response) => {
//       if (response.ok) {
//         // Show success alert message
//         alertBox.classList.remove("error");
//         alertBox.classList.add("success");
//         alertBox.textContent = "Message sent successfully!";
//         contactForm.reset();
//       } else {
//         // Show error alert message
//         alertBox.classList.remove("success");
//         alertBox.classList.add("error");
//         alertBox.textContent = "Oops, there was an error sending your message. Please try again later.";
//       }
//     })
//     .catch((error) => {
//       console.error("Error sending message:", error);
//       // Show error alert message
//       alertBox.classList.remove("success");
//       alertBox.classList.add("error");
//       alertBox.textContent = "Oops, there was an error sending your message. Please try again later.";
//     });
// });

// contact form ELASTICEMAIL

// function sendEmail () {
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "gourmetica.ro@gmail.com",
//     Password : "8E5A71F6B82D838EED24F1CB0C6AA998651D",
//     To : 'gourmetica.ro@gmail.com',
//     From :'gourmetica.ro@gmail.com',
//     Subject : "New Enquiry",
//     Body : "Name: " + document.getElementById("name").value
//     + "<br> Email: " + document.getElementById("email").value
//     + "<br> Phone: " + document.getElementById("phone").value
//     + "<br> Message: " + document.getElementById("message").value
// }).then(
//   message => alert(message)
// );
// }

function sendEmail() {
  var name = document.getElementsByName("name")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var phone = document.getElementsByName("phone")[0].value;
  var message = document.getElementsByName("message")[0].value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "gourmetica.ro@gmail.com",
    Password: "8E5A71F6B82D838EED24F1CB0C6AA998651D",
    To: "gourmetica.ro@gmail.com",
    From: "gourmetica.ro@gmail.com",
    Subject: "New Enquiry",
    Body:
      "Name: " +
      name +
      "<br> Email: " +
      email +
      "<br> Phone: " +
      phone +
      "<br> Message: " +
      message,
  }).then(function (message) {
    alert("Mesajul a fost trimis cu succes!");
  });
  
}





// contact form ELASTICEMAIL end
