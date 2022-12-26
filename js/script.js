{
    const welcome = () => {
        console.log("Witam serdecznie życząc miłego dnia!")
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
        const headerElements = document.querySelectorAll(".secondaryHeader");

        body.classList.toggle("dark");
        headerElements.forEach(header => {
            header.classList.toggle("secondaryHeaderDark");
        })
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny"
    };

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
};