class Block0{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.color="skyblue";
        this.stroke="black";
      }
      display(){
          
          if(this.body.speed<10){
            var angle = this.body.angle;
            var pos= this.body.position;

          push();

        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        stroke(this.stroke);
        rect(0,0,this.width, this.height);

          pop();
          }
          else{
            World.remove(world,this.body);
        }
          }
              }