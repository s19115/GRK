function setup() {
  createCanvas(800,600);
}

function draw() {
  //noprotect
  var step=255/(width+height)
  var middleX=width/2;
  var middleY=height/2;
  noLoop();
  background(0);
  for(y=0; y<height; y++)
   for(x=0; x<width; x++) {
     var dx=abs(middleX-x);
     var dy=abs(middleY-y);
     d=sqrt(dx*dx+dy*dy)
     set(x,y,color(255-d,d,step*(x+y)))
     }
  
  
  updatePixels();
}