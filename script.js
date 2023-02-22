// -----------------Nav-Bar Section--------------------

const mobile_nav = document.querySelector(".mobile-navbar-btn");

const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// -------------------Home Section-------------------

const containerE1 = document.querySelector(".container-new");

const careers = ["Web Developer", "Software Engineer", "Freelancer"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerE1.innerHTML = `<h1>I am a ${careers[careerIndex].slice(
    0,
    characterIndex
  )}</h1>`;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 350);
}

/*---------------------Validation--------------------------*/

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const textarea = document.getElementById("textarea");

let validName = false;
let validEmail = false;
let validPhone = false;
let validTextarea = false;

$("#failure").hide();
$("#success").hide();

name.addEventListener("blur", () => {
  console.log("Name is blurred");
  // Validate name here
  let regex = /^[a-zA-Z]([\ 0-9a-zA-Z]){2,20}$/;
  let str = name.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your name is valid");
    name.classList.remove("is-invalid");
    validName = true;
  } else {
    console.log("Your name is invalid");
    name.classList.add("is-invalid");
    validName = false;
  }
});

email.addEventListener("blur", () => {
  console.log("Email is blurred");
  // Validate email here
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your email is valid");
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    console.log("Your email is invalid");
    email.classList.add("is-invalid");
    validEmail = false;
  }
});

phone.addEventListener("blur", () => {
  console.log("Phone is blurred");
  // Validate phone here
  let regex = /^[0-9]{10}$/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your phone is valid");
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    console.log("Your phone is invalid");
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});

textarea.addEventListener("blur", () => {
  console.log("Textarea is blurred");
  // Validate textarea here
  let regex =
    /^([_\-\.\ \/\@\#\$\%\^\&\*\(\)\!\,\<\>\?\'\"\;\:\`\~\=\+\{\[\]\}\|\\0-9a-zA-Z]){4,150}$/;
  let str = textarea.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your textarea is valid");
    textarea.classList.remove("is-invalid");
    validTextarea = true;
  } else {
    console.log("Your textarea is invalid");
    textarea.classList.add("is-invalid");
    validTextarea = false;
  }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("You clicked on submit");
  console.log(validName, validEmail, validPhone, validTextarea);
  // Submit your form here
  if (validName && validEmail && validPhone && validTextarea) {
    let failure = document.getElementById("failure");
    console.log(
      "Name, Email, Phone and Textarea are Valid.Submitting the form."
    );
    let success = document.getElementById("success");
    success.classList.add("show");
    // $('#failure').alert('hide');
    $("#failure").hide();
    $("#success").show();
  } else {
    console.log(
      "One out of Name, Email, Phone or Textarea is not valid.Hence not submitting the form."
    );
    let failure = document.getElementById("failure");
    failure.classList.add("show");
    // $('#success').alert('hide');
    $("#success").hide();
    $("#failure").show();
  }
});

// ------------------------Scroll Button------------------------

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
  //   window.scrollTo(0, 0);

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  //   $("html, body").animate({ scrollTo: 0 }, "slow");
});
