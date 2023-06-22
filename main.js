const colorPreview = document.querySelector(".preview")
const colorSlider = document.querySelector("#hue-slider")
const brightnessSlider = document.querySelector("#brightness-slider")
const contrastSlider = document.querySelector("#contrast-slider")


colorSlider.addEventListener("input", (e) => {
    const hue = e.target.value;
    const color = `hsl(${hue}, 100%, 50%)`;

    colorPreview.style.backgroundColor = color;
    colorPreview.style.boxShadow = `0px 0px 53px 13px ${color}`;

})

brightnessSlider.addEventListener("input", (e) => {
    const brightness = e.target.value;

    colorPreview.style.filter = `brightness(${brightness}%`
})

contrastSlider.addEventListener("input", (e) => {
    const contrast = e.target.value;

    colorPreview.style.filter = `contrast(${contrast}%`

})