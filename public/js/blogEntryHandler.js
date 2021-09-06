const form = document.getElementById("blogForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = await document.getElementById("blogTitle").value;
    const content = await document.getElementById("blogEntry").value;


    await fetch("/dashboard", {
        method: "POST",
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
});

