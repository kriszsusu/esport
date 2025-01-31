document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();  // Prevent form submission for validation

        const name = document.getElementById("name").value;
        const grade = document.getElementById("grade").value;
        const email = document.getElementById("email").value;

        if (!name || !grade || !email) {
            alert("Kérlek, töltsd ki az összes mezőt!");
            return;
        }

        // Show loading spinner
        document.querySelector(".spinner-container").style.display = "flex";
        
        setTimeout(() => {
            // Simulate form submission
            document.querySelector(".spinner-container").style.display = "none";
            alert("A regisztráció sikeres!");
        }, 2000); // Simulate a 2-second delay
    });
});
