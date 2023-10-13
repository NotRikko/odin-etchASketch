let squareDivs = document.querySelector("#squareDivs")
const rgbMode = document.querySelector("#rgb")
const shaderMode = document.querySelector("#shader")

let mode = "mono";
let numGrids= 16;

rgbMode.addEventListener ("click", () => {
    mode = "rgb";
    squareDivs.innerHTML = "";
    createSquares();
});

shaderMode.addEventListener ("click", () => {
    mode = "shader";
    squareDivs.innerHTML = "";
    createSquares();
});

function createSquares() {

    for (i=0; i<numGrids;i++){
        const row = document.createElement('div');
        row.classList.add("rows");
        for (j =0; j<numGrids; j++){
            const widthAndHeight = (500/ numGrids)-2;
            const square =document.createElement('div');
            square.classList.add("squares");
            square.setAttribute('data-h',0);
            function changeColor() {
                const h = parseInt(square.getAttribute('data-h'));
                if (mode === "mono") {
                    square.style.backgroundColor = "red";
                }
                else if (mode === "rgb") {
                    square.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                    console.log (square.style.backgroundColor = Math.floor(Math.random()*16777215).toString(16));
                }
                else if (mode === "shader"){
                        console.log(h);
                        let color = 255-(25.5*h);
                        square.style.backgroundColor = "rgb(" + color + "," + color + "," + color +")";
                    }  
            }
            square.style.width = widthAndHeight + "px";
            square.style.height = widthAndHeight +"px";
            square.style.border = "1px solid black";
            function incrementH() {
                const h = parseInt(square.getAttribute('data-h'));
                square.setAttribute('data-h', h+1);
            }
            square.addEventListener("mouseover",(incrementH));
            square.addEventListener("mouseover",(changeColor));
            row.appendChild(square);
        }
        squareDivs.appendChild(row);
    }
}
createSquares();



let header = document.querySelector('.header')
let chooseButton = document.querySelector("#choose");
chooseButton.addEventListener("click",(chooseAmount));

function chooseAmount() {
    if (document.getElementById('inputField')) {
        return;
    }
    else {
        let amount = document.createElement('input')
        amount.setAttribute('id','inputField');
        header.appendChild(amount);
        amount.addEventListener("keydown",(createNewSquare));
        function createNewSquare() {
            if (event.key === "Enter"){
                let playerInput = amount.value ;
                console.log(playerInput);
                if (playerInput >100){
                    return alert("To many squares!")
                }
                else if (playerInput === ""){
                    return alert("Please input a number")
                }
                else 
                    squareDivs.innerHTML = "";
                    numGrids = (playerInput) ;
                    createSquares();
                    amount.value = "";
            }
    }
    }
}


    



