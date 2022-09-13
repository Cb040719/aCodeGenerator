const $mainSection = document.querySelector(".mainSection");
const $workbenchSection = document.querySelector(".workbenchSection");
const $newCard = document.querySelector("#newCard");
const $newImgCard = document.querySelector("newImgCard");
const $newHeader = document.querySelector("newHeader");

let workBench = [];

$mainSection.addEventListener("click", function(event) {
    
    if(event.target.id === "newCard") {

        console.log(event.target.id);

        // workBench = [];
        
        workBench.push(`
            <div class="aCard">
                <h4>newCard</h4>
                <p>the card text</p>
            <div/>
        `);

        $workbenchSection.innerHTML = workBench.join("");
    };
    
    if(event.target.id === "newImgCard") {
        console.log(event.target.id);
    };

    if(event.target.id === "newHeader") {
        console.log(event.target.id);
    };

});
