let ball;
let pipes =[];

function setup() {
  createCanvas(640,600);
  noLoop();
  ball = new Ball();    
  pipes.push(new Pipe());
   createP('score: Mai Fix :)) ');
}

function draw() {
  background(30,32,25);
  
  for(let i=pipes.length-1;i>=0;i--){
    pipes[i].show();
    pipes[i].update();
    
    if(pipes[i].offScreen())
    pipes.splice(i,1);

    if(pipes[i].hits(ball)){
      pipes=[];
      window.location.reload();
    }
    
  }
  ball.update();
  ball.move();
 
  if(frameCount %70 ==0){
    pipes.push(new Pipe());
  }
}
function keyPressed(){
  if(key)
   loop();
}


