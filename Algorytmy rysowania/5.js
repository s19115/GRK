function setup() {
  createCanvas(512, 512);
  background(255);
  
  var x0=-1;
  var y0=-1;
  var x1=-1;
  var y1=-1;
}

function draw() {
  
}
function mousePressed() {
    x0=mouseX;
    y0=mouseY;
}
function mouseDragged() {  
    x1=mouseX;
    y1=mouseY;  
    background(255);
    noStroke();
    fill('red');
    ellipse(x0-3,y0-3,6);
    fill('green');  
    ellipse(x1-3,y1-3,6);
}
function mouseReleased() {
  background(255);
  loadPixels();
  draw_line();
  updatePixels();
}
function set_pixel(x,y,c) {
    idx=(y*512+x)*4;
    pixels[idx]=c;
    pixels[idx+1]=c;
    pixels[idx+2]=c;
    pixels[idx+3]=255;
}
function draw_line() {  
        dx = Math.abs(x1 - x0);
        dy = Math.abs(y1 - y0);

        yBiggerThenX = false;
        if (dx < dy) {
            yBiggerThenX = true;
            tmp = x0;
            x0 = y0;
            y0 = tmp;
            tmp = x1;
            x1 = y1;
            y1 = tmp;
            tmp = dx;
            dx = dy;
            dy = tmp;
        }

        deq = 2 * dy;
        d = deq - dx;
        dinc = d - dx;
        y = y0;

        stepX = 0;
        if (x0 < x1) {
            stepX = 1;
        }
        else if (x1 < x0) {
            stepX = -1;
        }
        else {
            return;
        }

        stepY = 0;
        if (y0 < y1) {
            stepY = 1;
        }
        else if (y1 < y0) {
            stepY = -1;
        }
        else {
            return;
        }

        for (x = x0; x != x1; x += stepX) {
            if (yBiggerThenX) {
                set_pixel(y, x, 0);
            }
            else {
                set_pixel(x, y, 0);
            }

            if (d < 0) {
                d += deq;
            }
            else {
                d += dinc;
                y += stepY;
            }
        }
  
}