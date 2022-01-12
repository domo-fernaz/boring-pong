let canvas = document.getElementById("candice");
let ctx = canvas.getContext("2d");

function obj(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.draw = function () {
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };
}

let player = new obj(0, 0, 10, 25);
let ball = new obj(390, 250, 10, 10);
