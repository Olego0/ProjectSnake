import './styles.css'
import ground from "./img/unknown.png";
import foodImg from "./img/app.png";
import foodeImg from "./img/ban.png";
// import upImg from "./img/up.png";
import downImg from "./img/down.png";
// import ggg from "./img/ggg.png";
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");



// const ground = new Image();
// ground.src = "./img/unknown.png";

// const bg = new Image();
// bg.src = "./img/bg_.png";

// const foodImg = new Image();
// foodImg.src = "./img/app.png";

// const foodeImg = new Image();
// foodeImg.src = "./img/ban.png";

// const upImg = new Image();
// upImg.src = "./img/up.png";

// const downImg = new Image();
// downImg.src = "./img/down.png";

// const ggg = new Image();
// ggg.src = "img/ggg.png";

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

let dir;
let down = {};
let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
};

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
}

function eatTail(head, arr) {
    for (let i = 0; i < arr.length; i++) {
       if(head.x == arr[i].x && head.y == arr[i].y){
           alert("game ower!");
           clearInterval(game);
           window.location.reload()
           
       } 
        
    }
}




function drawGame(){
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(foodImg, food.x, food.y);
    ctx.drawImage(foodeImg, foode.x, foode.y);
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
        del -= 25;
        game = setInterval(drawGame, del);
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
        // if(score >= 10 && score <= 11){
        //     ctx.drawImage(clown, 0, 0);
        // }
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
    
}

let game = setInterval(drawGame, del);








