let container = document.querySelector(".container");
let inputText = document.getElementById("input-text");
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", ()=> {
    container.innerHTML = "";
    let sentence = inputText.value.trim();
    let textLength = sentence.length;
    let circleRadius = Math.max(10, textLength);
    let containerSize = circleRadius * 2 + 40;
    let viewBoxSize = containerSize - 20;
    container.innerHTML = `
    <svg viewBox = "0 0 ${viewBoxSize} ${viewBoxSize}" width="${containerSize}" height="${containerSize}">
    <defs>
    <path id="circle" d="M ${viewBoxSize/2} ${viewBoxSize - 10} a ${circleRadius} ${circleRadius} 0 1 1 1 0"/>
    </defs>
    <text font-size="14">
    <textPath xlink:href = "#circle" id="text">
    ${sentence}
    </textPath>
    </text>
    </svg>
    `;
});
