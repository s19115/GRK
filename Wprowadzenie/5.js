function setup() {
  createCanvas(800, 800);
}

function draw() {
  
  stroke('white');
  //noprotect
  noLoop();
  background(0);
  
  let x1=400,y1=100;
  let x2=100,y2=700;
  let x3=700,y3=700;
  
  point(x1,y1);
  point(x2,y2);
  point(x3,y3);
  
  let cx=x1,cy=y1;
  
  set(cx,cy,255);
  
  
  updatePixels();
  
  
   for(let i=0;i<100000;i++){
    let ranNum=Math.round(random(1,3));
     
    switch(ranNum){
      
      case 1:
        
        cx=Math.floor((cx+x1)/2);
        cy=Math.floor((cy+y1)/2);
        point(cx,cy)
        break;
        
        case 2:
        
        cx=Math.floor((cx+x2)/2);
        cy=Math.floor((cy+y2)/2);
        point(cx,cy)
        break;
        
        case 3:
        cx=Math.floor((cx+x3)/2);
        cy=Math.floor((cy+y3)/2);
        point(cx,cy)
        break;
        
        
        default:
      print("ERROR");
        break;
        }}
  }

