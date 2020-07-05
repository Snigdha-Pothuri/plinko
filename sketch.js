var plinkos=[];
var particles=[];
var divisions=[];
var divisionheight = 300;

function setup() {
  createCanvas(800,400);
 ground=new Ground(200,790, 800, 30); 

}

function draw() {
  background(255,255,255);   
  
  ground.display(); 

  
 
  for (var k=0; k<divisions.length; k=k+1){
    divisions[k].display();
    } 

    for (var j=0;j<particles.length; j=j+1) {
      particles[j].display();
    }
  
  drawSprites();
  
    }