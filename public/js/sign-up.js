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
      console.log(response);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}




document.querySelector(".signup-form").addEventListener("submit", signUp);