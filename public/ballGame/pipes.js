class Pipe {
    constructor(){
       this.spacing = 100;
       this.top = random(height/6,3/4*height);
       this.bot = height - (this.top + this.spacing);
       this.x = width;
       this.pipeWidth = 50;
       this.speed = 3;

       this.highLight = false;
    }
    hits(ball){ 
        if(ball.y <= this.top+ball.d/2 || ball.y >= height-this.bot-ball.d/2){
         if(ball.x >= this.x-ball.d/2 && ball.x <= this.x + this.pipeWidth+ball.d/2){
          this.highLight =true;
          return true;
         }
      }
      this.highLight = false;
      return false;
    }
    show(){
        fill(46,147,60);
        if(this.highLight){
            fill(255,0,0);
        }
        rect(this.x,0,this.pipeWidth,this.top);
        rect(this.x,height - this.bot,this.pipeWidth,this.bot);
    }
    update(){
        this.x -= this.speed;
        
    }
    offScreen(){
        if(this.x < -this.pipeWidth)
         return true;
        else return false;
    }
}