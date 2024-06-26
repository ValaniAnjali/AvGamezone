let inputDir = {x:0 , y:0};
let speed = 4;
let lastPaintTime = 0;

let snakeArr=[
    {x:13 ,y:15}
]
food = {x:6,y:7};
let score = 0;

inputDir = {x:0,y:0}
function upfun(){
    inputDir.x=0;
    inputDir.y=-1;
    
}

function downfun(){
    console.log("ArrowDown");
    inputDir.x=0;
    inputDir.y=1;
}
function leftfun(){
    console.log("ArrowLeft");
    inputDir.x=-1;
    inputDir.y=0;
}
function rightfun(){
    console.log("ArrowRight");
    inputDir.x=1;
    inputDir.y=0;

}

//game functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=ctime
    gameEngine();
    // console.log(ctime)
}

function isColide(snake){
    //if you bump into your self
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true
        }
    }
        if(snake[0].x>18 || snake[0].x<0  || snake[0].y>18 || snake[0].y<0){
            return true;
        }
    
}

function gameEngine(){
    //updating snake array and food

    if(isColide(snakeArr)){
        inputDir = {x:0 , y:0};
        alert('Game over press any key to play again');
        snakeArr = [{x:13 ,y:15}];
        score = 0;
    }

    //if you have eaten food increament score and rearrange food

    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        score+=1 ;//eat food increase score
        // console.log(score)
        scoreBox.innerHTML = "score  : "+score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x,y: snakeArr[0].y + inputDir.y})
        //if we wanr random number b/w a & b :: a + (b-a)*math.round  

        let a=2;
        let b=16;

        food = {x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())} 
    }

    //moving the snake
    /*here we are not including last block of snake in i initialization*/
    for (let i = snakeArr.length-2 ; i >=0; i--) {
        snakeArr[i+1] = {...snakeArr[i]}; //here last square of snake equal to last second square of snake (assume:snake will move)
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    //display snake and food
    //display snake
    board.innerHTML='';
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x; 
        if(index===0){
            snakeElement.classList.add('head');
        }
        snakeElement.classList.add('snake');
        board.appendChild(snakeElement);

    //displaying food
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);



    })
}




//main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir = {x:0,y:1}//start the game

    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x=1;
            inputDir.y=0;
        default:
            break;
    }
});
