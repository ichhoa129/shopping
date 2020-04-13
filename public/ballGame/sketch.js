let ball;
let pipes =[];

var score = 0;
function setup() {
  createCanvas(640,600);
  noLoop();
  ball = new Ball();    
  pipes.push(new Pipe());
  
   
}

function draw() {
  background(30,32,25);
  for(let i=pipes.length-1;i>=0;i--){
    pipes[i].show();
    pipes[i].update();
    
    if(pipes[i].offScreen()){
      pipes.splice(i,1);
    }
    if(pipes[i].hits(ball)){
      pipes=[];
      window.location.reload();
    }
 
   if(pipes[i].scored && (ball.x < pipes[i].x+pipes[i].pipeWidth && ball.x > pipes[i].x ))
    {
      score++;
      pipes[i].scored = false;
    }
  }
  ball.update();
  ball.move();
   
  if(frameCount %70 ==0){
    pipes.push(new Pipe());
  }
  textSize(60);
  textFont('Georgia');
  text(score,width/2,100);
}
function keyPressed(){
  if(key)
   loop();
}


