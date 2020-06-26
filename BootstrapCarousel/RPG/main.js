let mapArray, ctx, currentImgMainX, currentImgMainY;
let imgMountain, imgMain, imgEnemy, EnemyPositionX, EnemyPositionY, CutimgEnemyPositionX;
let width,height;// 3X3, 4X4, 5X5......
$(document).ready(function(){

    width=4, height=4;

    // Game map: 0:can go, 1:barrier, 2:goal, 3:enemy
    mapArray=
    [
        0,1,0,1,
        0,0,0,0,
        3,1,0,1,
        1,0,0,2 ];

    ctx=$("#myCanvas")[0].getContext("2d");

    imgMain=new Image();
    imgMain.src="images/spriteSheet.png";
    currentImgMainX=0, currentImgMainY=0;

    imgMain.onload=function(){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);   
    };

    imgMountain=new Image();
    imgMountain.src="images/material.png";
    
    imgEnemy=new Image();
    imgEnemy.src="images/Enemy.png";
    
    imgMountain.onload=function(){

        imgEnemy.onload=function(){
            for(let x in mapArray)
            {
                if(mapArray[x]==1)
                {
                    ctx.drawImage(imgMountain,32,65,32,32,x%width*200, Math.floor(x/height)*200,200,200);   
            
                }
                else if(mapArray[x]==3)
                {
                    EnemyPositionX=x%width*200; 
                    EnemyPositionY=Math.floor(x/height)*200;

                    ctx.drawImage(imgEnemy,7,40,104,135,x%width*200, Math.floor(x/height)*200,200,200);    
                }
            }
        }
    };
    
    CutimgEnemyPositionX=7;
    $("#AttackButton").click(function(){
        if( $("#talkBox").text()=="Hi")
        {
            ctx.clearRect(EnemyPositionX,EnemyPositionY,200,200);

            CutimgEnemyPositionX+=104;
            ctx.drawImage(imgEnemy,CutimgEnemyPositionX,40,104,135,EnemyPositionX, EnemyPositionY,200,200);   
            $("#AttackButton").attr("value","在揍!");
        }

    });
    
});

$(document).keydown(function(event){

    let targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;    
    event.preventDefault();
    //console.log(event.code);
    switch(event.originalEvent.code)
    {
        case "ArrowLeft":
            targetImgMainX=currentImgMainX-200;
            targetImgMainY=currentImgMainY;
            cutImagePositionX=175;   
            break;
        case "ArrowUp":
            targetImgMainX=currentImgMainX;
            targetImgMainY=currentImgMainY-200;       
            cutImagePositionX=355;         
            break;
        case "ArrowRight":
            targetImgMainX=currentImgMainX+200;
            targetImgMainY=currentImgMainY;
            cutImagePositionX=540;         
            break;
        case "ArrowDown":
            targetImgMainX=currentImgMainX;
            targetImgMainY=currentImgMainY+200;
            cutImagePositionX=0;       
            break;
        default:
            return;

    }

    if(targetImgMainX<=600 && targetImgMainX>=0&&targetImgMainY<=600&&targetImgMainY>=0)
    {// in range
        targetBlock=targetImgMainX/200+targetImgMainY/200*height;
    }

    else
    {// out of range
        targetBlock=-1;
    }

    ctx.clearRect(currentImgMainX,currentImgMainY,200,200);

    if(targetBlock==-1||mapArray[targetBlock]==1||mapArray[targetBlock]==3)
    {}// do nothing if has error
    else
    {// if no error, setting new positions
        $("#talkBox").empty();
        currentImgMainX=targetImgMainX;
        currentImgMainY=targetImgMainY;
    }
    // draw player at new place
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);  

    switch(mapArray[targetBlock])
    {
        case undefined:
            $("#talkBox").text("Edge");
            break;
        case 1:
            $("#talkBox").text("Mountain"); 
            break;
        case 2:
            $("#talkBox").text("Goal!");     
            break;
        case 3:
            $("#talkBox").text("Hi");     
            break;
    }

});


