let ball;
let pipes =[];

var high = getCookie();
var score = 0;
var highScore;
var frame = 70;


highScore = high || 0 ;


var dishighsc = true;

function setup() {
  createCanvas(640,600);
  noLoop();
  ball = new Ball();    
  pipes.push(new Pipe());
  
   
}

function draw() {
  background(30,32,25);
  
  
  if(score > highScore)
    highScore = score;  
  for(let i=pipes.length-1;i>=0;i--){
    if(score>=30 ){
      frame =60;
      pipes[i].speed = 6;
      if(score>=50){
        frame = 50
        pipes[i].speed = 5;
      }
    }
    pipes[i].show();
    pipes[i].update();
    
    if(pipes[i].offScreen()){
      pipes.splice(i,1);
    }
    if(pipes[i].hits(ball)){
      pipes=[];
      document.cookie = "highScore" + "=" + highScore;
      window.location.reload();
    }
 
   if(pipes[i].scored && (ball.x < pipes[i].x+pipes[i].pipeWidth && ball.x > pipes[i].x ))
    {
      score++;
      pipes[i].scored = false;
    }
   if(dishighsc){
    displayHighscore();
  }
  }
 
  ball.update();
  ball.move();
   
  if(frameCount %frame ==0){
    pipes.push(new Pipe());
  }
  fill(240);
  textSize(60);
  text(score,width/2,100);
}
function keyPressed(){
  if(key){
    loop();
    dishighsc = false;
  }
   
}
function displayHighscore(){
 
  textSize(70);
  fill(150);
  text('↑',width/2,height/2+120);
  text('↓',width/2,height/2+190);
  text('→',width/2+19,height/2+156);
  text('←',width/2-54,height/2+156); 
  text('High Score: '+highScore,50,height/2-100  );
}
function getCookie(){
  var x = document.cookie;
  var newX = x.split('; ');
  var findedX = newX.filter(x => x.indexOf('highScore') !== -1);
  var splitedFinded = findedX[0].split('=');
  var highSC = parseInt(splitedFinded[1]);
  return highSC;
}


