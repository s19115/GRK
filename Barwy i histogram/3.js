
    let img,img_r,img_g,img_b,img_rgb;

    function preload() {
        img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
        img_r = createImage(256, 256);
        img_g = createImage(256, 256);
        img_b = createImage(256, 256);
        img_rgb=createImage(256,256);
    }

    function setup() {
        createCanvas(512,512);
        img.resize(256,256);
        density = pixelDensity();

        img.loadPixels();
        img_r.loadPixels();
        img_g.loadPixels();
        img_b.loadPixels();
        
        img.loadPixels();
        d=pixelDensity();
        for(x=0;x<img.width;x++)
          for(y=0;y<img.height;y++) 
            for(dx=0;dx<d;dx++)
              for(dy=0;dy<d;dy++) {      
                pos=4*((y*d+dy)*img.width*d+(x*d+dx));
                img_r.pixels[pos]=img.pixels[pos] 
                img_g.pixels[pos+1]=img.pixels[pos+1];
                img_b.pixels[pos+2]=img.pixels[pos+2];
                img_r.pixels[pos+3]=img.pixels[pos+3];
                img_g.pixels[pos+3]=img.pixels[pos+3];
                img_b.pixels[pos+3]=img.pixels[pos+3];
        }
        img.updatePixels();
        img_r.updatePixels();
        img_g.updatePixels();
        img_b.updatePixels();

        img_rgb.blend(img_r,0,0,256,256,0,0,256,256,ADD);
        img_rgb.blend(img_g,0,0,256,256,0,0,256,256,ADD);
        img_rgb.blend(img_b,0,0,256,256,0,0,256,256,ADD);


        image(img_r, 0, 0);
        image(img_g, 256, 0);
        image(img_b, 0, 256);
        image(img_rgb, 256, 256);
    }

  