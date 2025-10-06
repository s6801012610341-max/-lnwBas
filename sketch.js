let hoopY = 400;
let ballX = 250;
let ballY = 50;
let speed = 5;
let level = 1;
let isGameOver = false;

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  background(200);

  if (!isGameOver) {
    drawHoop(mouseX, hoopY);
    drawBall(ballX, ballY);

    ballY += speed;

    // ตรวจสอบว่ารับลูกได้ไหม
    if (ballY > 400 && ballY < 410 && abs(ballX - (mouseX - 50)) < 25) {
      fill(0, 250, 0);
      ballX = random(50, width - 50);
      ballY = 50;
      level++;
      speed += 0.5;
    }
    // ถ้าลูกบอลตกพื้น
    else if (ballY > height) {
      isGameOver = true;
    }

    // แสดงเลเวล
    fill(255, 0, 0);
    text("Level: " + level, 70, 30);
  } else {
    // แสดงข้อความ Game Over
    fill(255, 0, 0);
    textSize(48);
    text("GAME OVER", width / 2, height / 2);
    textSize(24);
    text("Level " + level + " !!!", width / 2, height / 2 + 50);
    text("By ภูริภัทรจัดให้", width / 2, height / 2 + 90);
  }
}

function keyPressed() {
  if (isGameOver && key === ' ') {
    ballX = random(50, width - 50);
    ballY = 50;
    speed = 5;
    level = 1;
    isGameOver = false;
  }
}

function drawHoop(xPos, yPos) {
  stroke(0);
  fill(150);
  ellipse(xPos - 50, 300 + 100, 75, 20);
  ellipse(xPos - 50, 300 + 100, 50, 10);
  line(xPos, 240 + 100, xPos, yPos - 75 + 100);
  line(xPos - 100, 240 + 100, xPos - 100, yPos - 75 + 100);
  line(xPos - 21, 325 + 100, xPos, yPos - 75 + 100);
  line(xPos - 79, 325 + 100, xPos - 100, yPos - 75 + 100);
  line(xPos - 100, 240 + 100, xPos, yPos - 160 + 100);
  line(xPos - 85, 305 + 100, xPos - 70, yPos - 55 + 100);
  line(xPos - 15, 305 + 100, xPos - 30, yPos - 55 + 100);
  line(xPos - 30, 308 + 100, xPos - 42, yPos - 55 + 100);
  line(xPos - 70, 308 + 100, xPos - 58, yPos - 55 + 100);
}

function drawBall(a, b) {
  fill(255, 165, 0);
  noStroke();
  ellipse(a, b, 35, 35);
}
