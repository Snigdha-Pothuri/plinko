var plinkos=[];
var particles=[];
var divisions=[];
var divisionheight = 300;

function setup() {
  createCanvas(800,400);
  ground = new Ground(600,height,1200,20);

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

    for (var e=0;e<plinkos.length; e=e+1) {
      plinkos[e].display();
    } 
    
    if(frameCount%60===0){  
    particles.push(new particle(random(width/2-30, width/2+30), 10,10)); 
   } 

  drawSprites();
  
    }