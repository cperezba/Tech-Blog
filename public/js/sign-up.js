const signUp = async (event) => {
  event.preventDefault();

  const username1 = document.getElementById('username').value.trim();
  const password1 = document.getElementById('password').value.trim();


  console.log(username1);
  console.log(password1);

  try {
    if (username1 && password1) {
      const response = await fetch("/signup", {
        method: "POST",
        body: JSON.stringify({
          username: username1,
          password: password1
        }),
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}


// if (response.ok) {
//   document.location.replace("/");
//   alert("Welcome to TechBlog!");
// } else {
//   alert("Failed to sign up!");
// }





document.querySelector(".signup-form").addEventListener("submit", signUp);







// // Here, this file is grabbing the user input from the sign up sheet
// // This should then be sent to the back end at /api/users to POST a new user
// // If successful, they are routed to the homepage
// // If not, error is displayed and can try to sign up again

// const signupFormHandler = async (event) => {
//     event.preventDefault();

//     const first_name = document.querySelector("#firstname-signup").value.trim();
//     const last_name = document.querySelector("#lastname-signup").value.trim();
//     const email = document.querySelector("#email-signup").value.trim();
//     const password = document.querySelector("#password-signup").value.trim();

//     console.log(first_name);
//     console.log(last_name);
//     console.log(email);
//     console.log(password);

//     if (first_name && last_name && email && password) {
//       const response = await fetch("/api/users/signup", {
//         method: "POST",
//         body: JSON.stringify({ first_name:first_name, last_name:last_name, email:email, password:password }),
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.ok) {
//         document.location.replace("/");
//         alert("Welcome to Jobster!");
//       } else {
//         alert("Failed to sign up.");
//       }
//     }
//   };

//   document
//     .querySelector(".signup-form")
//     .addEventListener("submit", signupFormHandler);