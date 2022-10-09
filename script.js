const $mainSection = document.querySelector(".mainSection");
const $workbenchSection = document.querySelector(".workbenchSection");
const $codeSection = document.querySelector(".codeSection");

let workbench = [];
let generatedHTML = [];


$mainSection.addEventListener("click", function(event) {
    
    if(event.target.id === "newCard") {
        console.log(event.target.id);   
        
        workbench.push(`
        <div class="aCard">
            <h2>Card Title</h2>
            <p>Card Text</p>
            <button id = "getCardCode">Get the Code</button>
        </div>
        `);
    };
    
    if(event.target.id === "newImgCard") {
        console.log(event.target.id);
        
        workbench.push(`
        <div class="aImgCard">
            <h2>Card Title</h2>
            <img src="https://picsum.photos/200" alt="img"/>
            <p>Card Text</p>
            <button id = "getImgCardCode">Get the Code</button>
        </div>
        `);
    };
    
    if(event.target.id === "newHeader") {
        console.log(event.target.id);
    };

    if(event.target.id === "clearBTN") {
        console.log(event.target.id);

        workbench = [];
        console.clear();
    };

    
    $workbenchSection.innerHTML = workbench.join("");
});

$workbenchSection.addEventListener("click", function(event) {
    
    if(event.target.id === "getImgCardCode") {
        $codeSection.innerHTML = '';
        generatedHTML = [];
        $imgCard = document.querySelector(".aImgCard");
        generatedHTML.push($imgCard.innerHTML);
    }

    if(event.target.id === "getCardCode") {
        $codeSection.innerHTML = '';
        generatedHTML = [];
        $card = document.querySelector(".aCard");
        generatedHTML.push($card.innerHTML);
    }
    
    $codeSection.append(generatedHTML);
})