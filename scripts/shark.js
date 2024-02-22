
const sharksElement = document.getElementById('sharks');
let sharkList = [];



const displaySharks = (sharks) => {
    sharks.forEach (shark => {
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    h3.textContent = shark.sharkName;
    let sharkOrder = document.createElement('order');
    sharkOrder.textContent = shark.order;
    //let sharkDiet = document.createElement('diet');
    //sharkDiet.textContent = shark.diet;
    let img = document.createElement("img");
    img.setAttribute('src', shark.imageUrl);
    img.setAttribute('alt', shark.sharkName);
    article.appendChild(h3);
    article.appendChild(sharkOrder);
    //article.appendChild(sharkDiet);
    article.appendChild(img);
    sharksElement.appendChild(article);
});}



const getSharks = async () => {
    const response = await fetch("https://run.mocky.io/v3/d6e92862-7263-4b16-8de9-3ce33ec6afc6");
    if (response.ok) {
        sharkList = await response.json();
    }
    displaySharks(sharkList);
}

const reset = () => {
    sharksElement.innerHTML = "";
};



function filterSharks(sharks) {
    reset();
    let filter = document.getElementById('filtered').value;
    switch(filter) {
        case'angel':
        displaySharks(sharks.filter(shark => shark.order.toLowerCase().includes('angel')));
        break;

        case "bullhead":
        displaySharks(sharks.filter(shark => shark.order.toLowerCase().includes("bullhead")));
        break;

        case "dogfish":
        displaySharks(sharks.filter(shark => shark.order.toLowerCase().includes("dogfish")));
        break;

        case "carpet":
        displaySharks(sharks.filter(shark => shark.order.toLowerCase().includes("carpet")));
        break;

        case "cow":
        displaySharks(sharks.filter(shark => shark.order.toLowerCase().includes("cow")));
        break;

        case "ground":
        displaySharks(sharks.filter(shark => shark.order.toLowerCase().includes("ground")));
        break;

        case "mackeral":
        displaySharks(sharks.filter(shark => shark.order.toLowerCase().includes("mackeral")));
        break;

        case "saw":
        displaySharks(sharks.filter(shark => shark.order.toLowerCase().includes("saw")));
        break;

        case "all":
        displaySharks(sharks);
        break;

        default:
        break;
    }
}

getSharks();

document.querySelector("#filtered").addEventListener("change", () => { filterSharks(Object.values(sharkList)) });
getSharks();