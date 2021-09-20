

let p1 = document.getElementById("player1");
let s1=0;

let p2 = document.getElementById("player2");
let s2=0;

let ball = document.getElementById("ball");

let ballDirection = true;

let ballAngle = "up";

setInterval(function(){ moveBall(); }, 100);


window.addEventListener("keydown", function(event) {
        switch (event.key) {

            case "ArrowUp":
            
                movePlayer(p1,true);

                break;

            case "ArrowDown":
                
                movePlayer(p1,false);

                break;

            case "z":
                
                movePlayer(p2,true);

                break;
            case "s":
                
                movePlayer(p2,false);

                break;

            default:
                break;
        }
  }, true);

/**
 * Modifie la valeur top du style d'un player pour le faire bouger dans une direction
 * @param {*} player Le jouer a bouger 
 * @param {*} direction La driection (true = vers le haut, false = vers le bas)
 */
function movePlayer(player, direction){

    let currentPos = player.offsetTop;
    if (canMovePlayer(player,direction)){
        if(!direction) currentPos += 10 ;
        else currentPos -= 10;
    }

    player.currentPos += "px";
    player.style.top = currentPos;

} 

/**
 * Cette fonction nous revoit un booleen qui nous dit si un player peut se deplacer dans une direction
 * @param {*} player le player a bouger
 * @param {*} direction la direction dans la laquelle on fait la verif
 */
function canMovePlayer(player, direction){

    if(direction){
        return (player.offsetTop == 0) ? false : true;
    } else{
        return (player.offsetTop == 300) ? false : true;
    }

}

function moveBall(){

    let x = ball.offsetLeft;
    let y = ball.offsetTop;


    getNewDirection(x,y);

    getNewAngle(x,y);

    if(!checkScore(x)){


    if(ballDirection){
        x += 10;
    } else{
        x-= 10;
    }

    switch (ballAngle) {

        case "straight":
            
            break;

        case "up":
            y-=10;
            break;

        case "down":
            y+=10;
            break;
        default:
            break;
    }

    x+="px";
    y+="px";

    ball.style.top=y;
    ball.style.left=x;
    }
}

function getNewDirection(x,y){

    if(x == 20 ){
        if(y >= p1.offsetTop && y < p1.offsetTop+50 )
        ballDirection = !ballDirection;
    }
    if(x==480){
        if(y >= p2.offsetTop && y < p2.offsetTop+50 )
        ballDirection = !ballDirection;
    }

}

function getNewAngle(x,y){

    if(y<=0){
        ballAngle = "down";
    }

    if(y>=340){
        ballAngle = "up";
    }

}

function checkScore(x){


    if(x <= 0){
        ball.style.top = "170px";
        ball.style.left = "250px";
        ballDirection = !ballDirection;
        document.getElementById("score 2").innerHTML = ++s2;
        return true;
    }

    if( x >= 500){
        ball.style.top = "170px";
        ball.style.left = "250px";
        ballDirection = !ballDirection;
        document.getElementById("score 1").innerHTML = ++s1;
        return true;
    }

    return false;
}
