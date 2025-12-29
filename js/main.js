const buttons = document.querySelectorAll("a button");
const sections = document.querySelectorAll(".content-section");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const target = button.getAttribute("data-section");

        sections.forEach(section => {
            section.classList.add("hidden");
        });

        document.getElementById(target).classList.remove("hidden");
    });
});

