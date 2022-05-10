
let Player = {
    x: 400,
    y: 580
}







function setup() {

    let canvas = document.getElementById('invaders-canvas');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "#181A18";
    ctx.fillRect(0, 0, 800, 600);
    ctx.fillStyle = "white";
    ctx.font = '48px Verdana';
    ctx.fillText('space invaders', 200, 50);
    

    drawPlayer();

}




function drawPlayer() {
    let canvas = document.getElementById('invaders-canvas');
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = "#181A18";
    ctx.fillRect(0, 0, 800, 600);
    ctx.fillStyle = "#00FF00";
    ctx.beginPath();
    ctx.moveTo(Player.x, Player.y);
    ctx.lineTo(Player.x - 10, Player.y + 20);
    ctx.lineTo(Player.x + 10, Player.y + 20);
    ctx.fill(); 
}



function movePlayer(event) {
    switch(event.key) {
        case "ArrowLeft":
        Player.x -= 10;    
        break;
        
        case "ArrowRight":
            Player.x += 10;
            break;
        case "ArrowDown":
            Player.y += 10;
            break;
         case "ArrowUp":
            Player.y -= 10;
            break;
    }
    drawPlayer();
}





window.addEventListener('load', setup)


window.addEventListener('keydown', movePlayer);