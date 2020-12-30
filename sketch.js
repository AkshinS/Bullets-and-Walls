var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600, 400);
  bullet = createSprite(50, 200, 100, 20);
  bullet.shapeColor = color(0, 0, 255);

  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet.velocityX = speed;
}

function draw() {
  background("black");
  bullet.collide(wall);

  if (wall.x - bullet.x === (bullet.width + wall.width) / 2) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  }

  if (damage > 10) {
    wall.shapeColor = color(255, 0, 0);
  }

  if (damage < 10) {
    wall.shapeColor = color(0, 255, 0);
  }

  drawSprites();
}

function hasCollided(lbullet, lwall) {

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;
}