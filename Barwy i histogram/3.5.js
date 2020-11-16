
    let img,img_r,img_g,img_b,img_rgb;

    function preload() {
        img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
        img_h = createImage(256, 256);
        img_s = createImage(256, 256);
        img_v = createImage(256, 256);
        img_hsv=createImage(256,256);
    }

    function setup() {
        createCanvas(512,512);
        img.resize(256,256);
        density = pixelDensity();

        img.loadPixels();
        img_h.loadPixels();
        img_s.loadPixels();
        img_v.loadPixels();
        
        img.loadPixels();
        d=pixelDensity();
        for(x=0;x<img.width;x++)
          for(y=0;y<img.height;y++) 
            for(dx=0;dx<d;dx++)
              for(dy=0;dy<d;dy++) {      
                pos=4*((y*d+dy)*img.width*d+(x*d+dx));
                  r=img.pixels[pos]/255;
                  g=img.pixels[pos+1]/255;
                  b=img.pixels[pos+2]/255;
                
                  cmax = Math.max(r,g,b);
                  cmin = Math.min(r,g,b);
                
                  l=(cmax+cmin)/2;
                  v=cmax;
                
                  // img_v.set(x,y,255*l);
                  img_v.set(x,y,255*l);
        }
        img.updatePixels();
        img_h.updatePixels();
        img_s.updatePixels();
        img_v.updatePixels();



        image(img_h, 0, 0);
        image(img_s, 256, 0);
        image(img_v, 0, 256);
        image(img, 256, 256);
    }

  