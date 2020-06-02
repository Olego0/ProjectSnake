import './styles.css'
import groundi from "./img/background3.png";
import foodImgi from "./img/app.png";
import foodeImgi from "./img/ban.png";
import downImgi from "./img/down.png";
import coalImgi from "./img/coal.png";
import coal2Imgi from "./img/coal.png";
import coal3Imgi from "./img/coal.png";
import coal4Imgi from "./img/coal.png";
import coal5Imgi from "./img/coal.png";
import badappImgi from "./img/badapp.png";
import milkImgi from "./img/milk.png";
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");


const ground = new Image();
ground.src = groundi;

// const bg = new Image();
// bg.src = "img/bg_.png";

const foodImg = new Image();
foodImg.src = foodImgi;

const foodeImg = new Image();
foodeImg.src = foodeImgi;

// const upImg = new Image();
// upImg.src = "img/up.png";

const downImg = new Image();
downImg.src = downImgi;

const coalImg = new Image();
coalImg.src = coalImgi;

const coal2Img = new Image();
coal2Img.src = coal2Imgi;

const coal3Img = new Image();
coal3Img.src = coal3Imgi;

const coal4Img = new Image();
coal4Img.src = coal4Imgi;

const coal5Img = new Image();
coal5Img.src = coal5Imgi;

const badappImg = new Image();
badappImg.src = badappImgi;

const milkImg = new Image();
milkImg.src = milkImgi;




let box = 32;
let score = 0;
let del = 200;

let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box
};
let foode = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box
};

let coal = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box
};

let coal2 = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box
};

let coal3 = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box
};

let coal4 = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box
};

let coal5 = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box
};


// let badapp = {
//     x: Math.floor((Math.random() * 17 + 1)) * box,
//     y: Math.floor((Math.random() * 15 + 3)) * box
// };   



// let milk = {
//     x: Math.floor((Math.random() * 17 + 1)) * box,
//     y: Math.floor((Math.random() * 15 + 3)) * box
// };


let dir;
let down = {}; 
let badapp = {};
let milk = {};
let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
};
// music.innerHTML = `<embed src="./8-bit_song.mp3" autostart="true" hidden="true" loop="100"> </embed>`;

document.addEventListener("keydown", direction);
function direction(event) {
    if(event.keyCode == 65 && dir != "right"){
        dir = "left";
    } else if(event.keyCode == 87 && dir != "down"){
        dir = "up";
    } else if(event.keyCode == 68 && dir != "left"){
        dir = "right";
    } else if(event.keyCode == 83 && dir != "up"){
        dir = "down";
    }
    music.innerHTML = `<embed src="./8-bit_song.mp3" autostart="true" hidden="true" loop="100"> </embed>`;
}

function eatTail(head, arr) {
    for (let i = 0; i < arr.length; i++) {
       if(head.x == arr[i].x && head.y == arr[i].y){
           alert("game ower!");
           clearInterval(game);
           window.location.reload()
           window.location.reload()
           window.location.reload()
           window.location.reload()
       } 
        
    }
}




function drawGame(){
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(foodImg, food.x, food.y);
    ctx.drawImage(badappImg, badapp.x, badapp.y);
    ctx.drawImage(foodeImg, foode.x, foode.y);
    ctx.drawImage(coalImg, coal.x, coal.y);
    ctx.drawImage(coal2Img, coal2.x, coal2.y);
    ctx.drawImage(coal3Img, coal3.x, coal3.y);
    ctx.drawImage(coal4Img, coal4.x, coal4.y);
    ctx.drawImage(coal5Img, coal5.x, coal5.y);
    ctx.drawImage(milkImg, milk.x, milk.y);
    // ctx.drawImage(upImg, up.x, up.y);
    ctx.drawImage(downImg, down.x, down.y);

    for (let i = 0; i < snake.length; i++) {
        // ctx.fillStyle = i == 0 ? "darkgreen" : "green";
        ctx.fillStyle = i % 2 == 0 ? "darkgreen" : "green";
        // if(i % 2 == 0){
        //     ctx.fillStyle = "darkgreen"
        // }else{
        //     ctx.fillStyle = "green"
        // }
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText(score, box * 2.5, box * 1.7);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX == foode.x && snakeY == foode.y || snakeX == food.x && snakeY == food.y){
        score++;
        clearInterval(game);
        del -= 15;
        game = setInterval(drawGame, del);

        let random = Math.floor((Math.random() * 2)) ;
        if(random === 1){
            console.log(random);
            
            badapp = {
                x: Math.floor((Math.random() * 17 + 1)) * box,
                y: Math.floor((Math.random() * 15 + 3)) * box
            };
        }else(badapp = {})
        
        if(random === 1){
            console.log(random);
            
            milk = {
                x: Math.floor((Math.random() * 17 + 1)) * box,
                y: Math.floor((Math.random() * 15 + 3)) * box
            };
        }else(milk = {})

        foode = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box
        };
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box
        };
        if(score === 5){
            down = {
                x: Math.floor((Math.random() * 17 + 1)) * box,
                y: Math.floor((Math.random() * 15 + 3)) * box
            };
        }
        if(score >= 10 && score <= 11){
            ctx.drawImage(bg, 0, 0);
        }
    }else{
        snake.pop();
    }
    
    if(snakeX == down.x && snakeY == down.y){
        clearInterval(game);
        del = 200;
        game = setInterval(drawGame, del);
        
        down = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box
        };
    }
    
    

    if(snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY > box * 17){
        alert("game over!");
        clearInterval(game);
        window.location.reload()
        window.location.reload()
        window.location.reload()
    }

    if(snakeX == coal.x && snakeY == coal.y
        || snakeX == coal2.x && snakeY == coal2.y 
        || snakeX == coal3.x && snakeY == coal3.y 
        || snakeX == coal4.x && snakeY == coal4.y 
        || snakeX == coal5.x && snakeY == coal5.y){
        alert("game over!");
        clearInterval(game);
        window.location.reload()
        window.location.reload()
        window.location.reload()
    }
    if(snakeX == badapp.x && snakeY == badapp.y){
        score -= 1;
        // snake.pop();
        badapp = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box
        };
        
    }
    // if(score + 1){
    //     function getRandom(){}
    //         badapp = {
    //             x: Math.floor((Math.random() * 17 + 1)) * box,
    //             y: Math.floor((Math.random() * 15 + 3)) * box
          
    // }}
    
    if(snakeX == milk.x && snakeY == milk.y){
        
        snake.pop();
        milk = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box
        };
    }
    
    if(score === -1){
        alert("game over!");
        clearInterval(game);
        window.location.reload()
        window.location.reload()
        window.location.reload()
    }
    // if(value)
    // snake.pop();

    if(dir == "left") snakeX -= box;
    if(dir == "right") snakeX += box;
    if(dir == "up") snakeY -= box;
    if(dir == "down") snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    eatTail(newHead, snake);

    snake.unshift(newHead);
    // document.body.append(".body");
    
}

let game = setInterval(drawGame, del);


// ==========================МОДАЛКА==========================
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// ==========================МОДАЛКА2==========================
var btnb = document.getElementById("myBtnb");
btnb.onclick = function() {
    window.location.reload()
    window.location.reload()
    window.location.reload()
    window.location.reload()
    window.location.reload()
    window.location.reload()
    window.location.reload()
    window.location.reload()
    window.location.reload()
    window.location.reload()
    window.location.reload()
    window.location.reload()
}
// ==========================МОДАЛКА3==========================
var modalс = document.getElementById('myModalс');
var btnс = document.getElementById("myBtnс");
var spanс = document.getElementsByClassName("closeс")[0];
btnс.onclick = function() {
    modalс.style.display = "block";
}
spanс.onclick = function() {
    modalс.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalс) {
        modalс.style.display = "none";
    }
}
// ==============================СЛАЙДЕР=======================




