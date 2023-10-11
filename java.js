let squareDivs = document.querySelector("#squareDivs")

let numSquares= 256
function createSquares() {
    for (i =0; i<numSquares; i++) {
        let square =document.createElement('div');
        function changeColor() {
            square.style.backgroundColor = "red";
        }
        square.style.width = "2px";
        square.style.backgroundColor = "black";
        square.style.padding = "13px";
        square.style.margin = "0px";
        square.style.border ="1px solid white";
        square.style.flex = "0 0 auto";
        square.addEventListener("mouseover",(changeColor))
        squareDivs.appendChild(square);
    }
}
createSquares();

let header = document.querySelector('.header')
let chooseButton = document.querySelector("#choose");
chooseButton.addEventListener("click",(chooseAmount));

function chooseAmount() {
    let amount = document.createElement('input')
    header.appendChild(amount);
    function createNewSquare() {
        if (event.key === "Enter"){
            let playerInput = amount.value ;
            console.log(playerInput);
            if (playerInput >100)
                return alert("To many squares!")
            else 
                numSquares = (playerInput *playerInput) ;
                createSquares();
        }
    }

amount.addEventListener("keydown",(createNewSquare));

    
}


