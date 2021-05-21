var helicopter,helicopterImg,person,personImg,mask,maskImg;

var playbutton,playbuttonImg;

var gameState="Serve";


function preload(){

playbuttonImg=loadImage("Images/PlayButton.png");

}

function setup(){
    createCanvas(1000,500);

playbutton=createSprite(400,300);
playbutton.addImage("playbutton",playbuttonImg);
playbutton.scale=0.5;


}

function draw(){
    background("black");

    drawSprites();

    if(gameState==="Serve"){
        fill("coral");
        text("Wear a mask",450,20);
        fill("aqua");
        text("The starting of COVID-19.",10,100);
        text(" A family is planing for a tour from Tamilnadu to Kerla.So they started in a bus.",10,120);
        text("Then the goverment anounced to wear a mask when people go out.But they did not have mask.",10,140);
        text("While travelling suddenly the bus stopped because the driver found a board that 'RESTRICTED AREA 'WEAR A MASK TO ENTER''.",10,160);
        text("And there is a helicopter flying over there with mask to help the people by giving mask.The mask will fall from the helicopter when it find people standing down.",10,180);
        text("But it will not put on the exact where people are standing.",10,200);
        text("So HELP the people by moving them by using Right-> and Left <- arrow keys to catch the mask.",10,220);
        fill("skyblue");
        text("Click on the PLAY button to start the game",10,240);

        if(mousePressedOver(playbutton)){
            gameState="play";
        }

    }

    if(gameState==="play"){
          console.log("hello world");
          playbutton.destroy();
    }
   


}