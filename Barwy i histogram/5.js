
    let img;

    function preload() {
        img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
    }

    function setup() {
        createCanvas(512,512);
        img.resize(256,256);
        img.filter("gray");
        d = pixelDensity();

        img.loadPixels();
        let pixels=new Array(256);
         
        pixels.fill(0);
        for(x=0;x<img.width;x++)
          for(y=0;y<img.height;y++) 
            for(dx=0;dx<d;dx++)
              for(dy=0;dy<d;dy++) {      
                
                pos=4*((y*d+dy)*img.width*d+(x*d+dx));
                r=img.pixels[pos];
                pixels[r]++;
                
        }
        pixels[0]=0;
                for (let i = 0; i < 256; i++) {
            const y = map(pixels[i], 0, max(pixels), 256, 0);
            line(i, y, i, 256);
        }
      
        image(img,256,0);

    }

  