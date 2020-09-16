
var MalcolmFade, CordeliaCarstairs, MatthewFairchild, AnnaLightwood

function setup() {
  createCanvas(800,400);
   
  MalcolmFade= createSprite(400,200,50,100);
  MalcolmFade.shapeColor= "purple";
  MalcolmFade.debug= true;

  CordeliaCarstairs= createSprite(500,200,50,100);
  CordeliaCarstairs.shapeColor= "red";
  CordeliaCarstairs.debug= true;

  MatthewFairchild= createSprite(500,300,50,100);
  MatthewFairchild.shapeColor= "blonde";
  MatthewFairchild.debug= true;
  MatthewFairchild.velocityX= -2;
  

  AnnaLightwood= createSprite(200,300,50,100);
  AnnaLightwood.shapeColor= "blue";
  AnnaLightwood.debug= true;
  AnnaLightwood.velocityX= 2;

}

function draw() {
  background(0);  
  drawSprites();

  CordeliaCarstairs.x= mouseX;
  CordeliaCarstairs.y= mouseY;

  if(MalcolmFade.x - CordeliaCarstairs.x < MalcolmFade.width/2+ CordeliaCarstairs.width/2 && 
    CordeliaCarstairs.x - MalcolmFade.x < MalcolmFade.width/2+ CordeliaCarstairs.width/2 &&
    MalcolmFade.y - CordeliaCarstairs.y < MalcolmFade.height/2+ CordeliaCarstairs.height/2 &&
    CordeliaCarstairs.y - MalcolmFade.y < MalcolmFade.height/2+ CordeliaCarstairs.height/2){

    MalcolmFade.shapeColor= "white";
    CordeliaCarstairs.shapeColor= "green";

  }
 else
 {
   MalcolmFade.shapeColor= "purple";
   CordeliaCarstairs.shapeColor= "red";
 }
  
  if (MatthewFairchild.x - AnnaLightwood.x < MatthewFairchild.width/2+ AnnaLightwood.width/2 && 
    AnnaLightwood.x - MatthewFairchild.x < MatthewFairchild.width/2+ AnnaLightwood.width/2){

      MatthewFairchild.velocityX= MatthewFairchild.velocityX*(-1);
      AnnaLightwood.velocityX= AnnaLightwood.velocityX*(-1);

    }

  if (MatthewFairchild.y - AnnaLightwood.y < MatthewFairchild.height/2+ AnnaLightwood.height/2 && 
    AnnaLightwood.y - MatthewFairchild.y < MatthewFairchild.height/2+ AnnaLightwood.height/2){

      MatthewFairchild.velocityY= MatthewFairchild.velocityX*(-1);
      AnnaLightwood.velocityY= AnnaLightwood.velocityX*(-1);


    }





  }