//Gera número aleatório de 1 a 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1);
console.log(randomNumber2)

//Cria caminho da imagem correspondente
let diceImage1 = "dice" + randomNumber1 + ".png";

//Define caminho completo
let imageSource1 = "./images/" + diceImage1;

//Seleciona a imagem do player 1
let image1 = document.querySelector(".img1");
image1.setAttribute("src", imageSource1);

//Gera número aleatório de 1 a 6


//Cria caminho da imagem 2 correspondente
let diceImage2 = "dice" + randomNumber2 + ".png";

//Define caminho completo da imagem 2
let imageSource2 = "./images/" + diceImage2;

//Seleciona a imagem do player 2
//let image2 = document.querySelector(".img2");
//image2.setAttribute("src", imageSource2);
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);


function changeText(){
    let title = document.querySelector("h1");

    if (randomNumber1 > randomNumber2){
        title.innerHTML = "Player 1 Wins! 🚩";
    } else if (randomNumber2 > randomNumber1) {
        title.innerHTML = "🚩 Player 2 Wins!";
    }else {
        title.innerHTML = "Draw!";
    }
}

changeText();

