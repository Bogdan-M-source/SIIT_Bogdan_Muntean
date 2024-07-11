// Optional
//     1.Player daca intalneste un obstacol, nu poate trece de el +1
//     2.Adaugam numar de vieti la player ( +1 activitate )
//     3.Sa adaugam obstacole care scad din viata +1


if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }

//HOMEWORK
const player = document.getElementById("player")
const gameContainer = document.getElementById("game-container")

//A.Obstacolele de sine statatoare
const obstaclesClass = document.getElementsByClassName("obstacol")
const obstaclesList = [];
// randomizam pozitia obstacolelor + 2. le adaugam pozitiile in obiecte, 
//intr-un array
createObjects(obstaclesList, 'blue')

//B. Obstacolele care scad vieti
const enemiesClass = document.getElementsByClassName("enemy")
const enemiesList = [];
// randomizam pozitia obstacolelor + 2. le adaugam pozitiile in obiecte, intr-un array
createObjects(enemiesList, 'red')

function createObjects(array, color){
    //pentru a nu se suprapune cu player cand se incepe programul
    //Va fi intre 380 si 50
    for(let i = 0; i < 3; i++){
        let elementHtml = document.createElement('div')
        elementHtml.style.height = '40px'
        elementHtml.style.width = '40px'
        elementHtml.style.position = 'absolute'
        elementHtml.style.background = `${color}`

        let positionTop = Math.floor(Math.random() * (360 - 50) + 50);
        let positionLeft = Math.floor(Math.random() * (360 - 50) + 50);
        
        elementHtml.style.top = `${positionTop}px`
        elementHtml.style.left = `${positionLeft}px`

        let elementValues = {
            positionTop,
            positionLeft
        }
        array.push(elementValues)
        gameContainer.appendChild(elementHtml);
    }
}

//     TODO 1.Optional: Player daca intalneste un obstacol, nu poate trece de el +1
// Player daca intalneste un obstacol, nu poate trece de el. 
//Ne folosim de array-ul cu obiecte.
function checkIfTouchObstacle(playerTop, playerLeft){
    obstaclesList.forEach((element) => {
        let elementTop = element.positionTop
        let elementLeft = element.positionLeft
        
        if (playerTop >= elementTop - 40 && playerTop <= elementTop + 40 && 
        playerLeft >= elementLeft - 40 && playerLeft <= elementLeft + 40) {
            console.log("player touch obstacle");
            return true;
        }
    })
    return false;
}

//     TODO 3.Optional: Sa adaugam obstacole care scad din viata +1
function checkIfTouchEnemy(array, player, Lifes){
    array //enemyList
}



//     TODO 2.Optional: Adaugam numar de vieti la player ( +1 activitate )
const tabelVietiHtml = document.getElementById("tabel-vieti")
const arrayVieti = []
function displayLifes(numberLifes) {
    for(let i = 1; i < numberLifes+1; i++){
        const life = `life${i}`;
        arrayVieti.push(life)
        // ^^ valoarea, iar         vv imaginea
        const newLife = document.createElement("img")
        newLife.src = "heart.PNG";
        tabelVietiHtml.appendChild(newLife)
    }
}
let lifes = 3;   //cu atatea vieti incepem
displayLifes(lifes);




//Player movement
document.addEventListener("keydown",function(event){
    let oldTop = parseInt(player.style.top);
    let oldLeft = parseInt(player.style.left);
    checkObstacleBoolean = checkIfTouchObstacle(oldTop, oldLeft)

    if(event.key == "ArrowUp"){
        if(oldTop > 10 && checkObstacleBoolean === false){
            let newTop = oldTop - 10
            player.style.top = `${newTop}px`
        } else {
            console.log("Player-ul iese din arie.")
            return;
        }
    }
    
    if(event.key == "ArrowRight"){
        if(oldLeft < 360 && checkObstacleBoolean === false){
            let newLeft = oldLeft + 10
            player.style.left = `${newLeft}px`
        } else {
            console.log("Player-ul iese din arie.")
            return;
        }
    }
    
    if(event.key == "ArrowDown"){
        if(oldTop < 360 && checkObstacleBoolean === false){
            let newTop = oldTop + 10
            player.style.top = `${newTop}px`
        } else {
            console.log("Player-ul iese din arie.")
            return;
        }
    }
    
    if(event.key == "ArrowLeft"){
        if(oldLeft > 10 && checkObstacleBoolean === false){
            let newLeft = oldLeft - 10
            player.style.left = `${newLeft}px`
        } else {
            console.log("Player-ul iese din arie.")
            return;
        }
    }
});



//Tips: sa verific cu un watch in console
//Sa folosesc setInterval pe functia care verfica obstacolul
//Sa verific parametrii primiti in functie.

// function restrictedArea(obstaclesList){
//     for(let i = 0; i < obstaclesList.length; i++){
//         if(player.style.top === stopArea || player.style.left === stopArea){
//             return true;
//         }
//     }
//             return false;
// }

// function coordinateBoxes(box, player){
//     //Coordinate Box
//     let coordinateTop = parseInt(box.style.top);
//     let stopZoneTop = `${coordinateTop + 20}px`;
//     let endOfZoneTop = `${coordinateTop - 10}px`;

//     let coordinateLeft = parseInt(box.style.left);
//     let stopZoneLeft = `${coordinateLeft - 10}px`;
//     let endOfZoneLeft = `${coordinateTop + 20}px`;


//     //Coordinate Player
//     let playerTop = parseInt(player.style.top);
//     let playerLeft = parseInt(player.style.left);

//     if(playerTop > stopZoneTop && playerTop < endOfZoneTop){
//        return 0;
//     }
// }