const rangeInput = document.querySelectorAll(".range-input input"),
    progress = document.querySelector(".slider .progress");


rangeInput.forEach(input => {
    input.addEventListener("input", () => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        progress.getElementsByClassName.left = (minVal / rangeInput[0].max) * 100 + "%";
    });
});

