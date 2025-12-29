document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav button");
    const sections = document.querySelectorAll(".content-section");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-section");

            // Hide all sections
            sections.forEach(section => {
                section.classList.add("hidden");
            });

            // Show the target section
            document.getElementById(target).classList.remove("hidden");

            // Update active button
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    // Ensure About is visible and active on load
    document.getElementById("about").classList.remove("hidden");
    document.querySelector('button[data-section="about"]').classList.add("active");
});

