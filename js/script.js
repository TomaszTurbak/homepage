{
    const welcome = () => {
        console.log("Witam serdecznie życząc miłego dnia!")
    }

    const toggleBackground = () => {
        const body = document.documentElement;
        const themeName = document.querySelector(".themeName");

        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny"
    };

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
};