var hDog , dog ,hDogImg , dogImg;
var foodS , foodStock ;
var database ; 

function preload()
{
  hDogImg = loadImage("dogImg1.png");
  dogImg = loadImage("dogImg.png");
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  dog = createSprite(250,200,50,50);
  dog.addImage(dogImg);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("hDogImg");
  }

  drawSprites();
  textSize(35);
  strokeWeight(2);
  stroke("black");
  fill("white");
  text("PRESS THE UP ARROW KEY TO FEED THE DOG!",200,400);
  text("FEED THE DOG TO KEEP HIME HAPPY !",250,350);
  text("TAKE GOOD CARE OF HIM !",250,300);

}

function readStock(data){
  food = data.val();

}

function writeStock(x){
  database.ref('/').update({
    food : x
  })
}
