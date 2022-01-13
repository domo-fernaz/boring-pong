let run = true;

let canvas = document.getElementById("candice");
let ctx = canvas.getContext("2d");

function obj(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.draw = function () {
    ctx.fillColor = "#FFFFFF";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };
}

let player = new obj(0, 0, 10, 25);
let ball = new obj(390, 250, 10, 10);
ball.momentum = {
  x: 0,
  y: 0
};

document.addEventListener("keydown", (e) => {
  switch(e.key)
  {
    case 'w':
      if(player.y + player.h < 600)
        player.y++;
      break;
    case: 's':
      if(player.y > 0)
        player.y--;
      break;
    default:
      break;
  };
});

if (run)
  setInterval(() => {
    ctx.fillColor = "#000000";
    ctx.fillRect(0, 0, 800, 600);

    ball.draw();
    player.draw();
    
    if(ball.x < player.x + player.w && player.y < ball.y + ball.h && player.y + player.h > ball.y)
      ball.momentum.x = 1;
    if(ball.x + ball.w > 790)
      ball.momentum.x = -1;
    
    ball.x += ball.momentum.x;
  }, 17);
