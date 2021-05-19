var tom, tomimage, toma, tomi, jerry, jerryimage, jerryi, jerrya, background, a, backgroundi;
function preload() {
  
    tomimage = loadImage("images/cat1.png");
    toma = loadAnimation("images/cat2.png","images/cat3.png");
    tomi = loadImage("images/cat4.png")

    jerryimage = loadImage("images/mouse4.png");
    jerrya = loadAnimation("images/mouse3.png","images/mouse2.png");
    jerryi = loadImage("images/mouse1.png")

    backgroundi = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(900,700);
    tom.addImage("tom", tomimage);
    tom.addAnimation("run", toma);
    tom.addAnimation("happy", tomi);
    tom.scale = 0.1;

    tom.debug = true;
    tom.setCollider("rectangle",0,0,0,0);
    

    background(500,400,1000,800)
    

    jerry = createSprite(100,700);
    jerry.addImage("jerry", jerryimage);
    jerry.addAnimation("tease", jerrya);
    jerry.addAnimation("hap", jerryi);
    jerry.scale = 0.1;

    jerry.debug = true;
    jerry.setCollider("rectangle",0,0,0,0);
    
    
}

function draw() {
   
    background(backgroundi);
    background.scale = 0.1; 

    if(collide(jerry, tom)){
      tom.velocityX = 0;
      tom.changeAnimation("happy", tomi);
      jerry.changeAnimation("hap", jerryi);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW) {
    jerry.changeAnimation("tease", jerrya);
    tom.changeAnimation("run", toma);
    tom.velocityX = -3
  }

}


