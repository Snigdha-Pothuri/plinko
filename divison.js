class division {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);

      
  for(var i =0; i<=width; i=i+80 ){
    divisions.push(new division(i,height-divisionheight/2,10,divisionheight))
    } 

    } 

    
  }
  
  

