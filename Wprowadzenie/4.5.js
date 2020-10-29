function setup() {
  createCanvas(800,600);
}

function draw() {
  let grassy=height*2/3;
  let houseLeft=width/5;
  let houseRight=width*4/5;
  let houseTop=height/3;
  let rooftop=height/20;
  let middle=width/2;
  
  //noprotect
  noLoop();
  background(0);
  for(let x=0;x<width;x++){
    for(let y=0;y<grassy;y++){
    set(x,y,color(200, 200, 255))}
  for(let y=grassy;y<height;y++){
    set(x,y,color(0,100,0));
  }}
  for(let x=houseLeft;x<houseRight;x++){
    for(let y=houseTop;y<grassy;y++){
      set(x,y,color(100, 50, 30));
    }}
  for(let y=rooftop,w=1;y<houseTop;y++,w+=2){
    for(let x=middle-w;x<=middle+w;x++){
      set(x,y,color(255,100,100))
    }
  }
  for(let i=0;i<1000;i++){
    set(random(0,width),random(grassy,height),color(random(0,255),random(0,255),random(0,255)))
  }
  updatePixels();
}