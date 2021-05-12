canvas = new fabric.Canvas("canvas");
var height = 130;
var width = 130;
var x = 10;
var y = 10;
var playerImg = "";
var blockImg = "";

function player_update() {
    fabric.Image.fromURL("player.png",function (Img) {
        playerImg = Img;
        playerImg.scaleToHeight(150);
        playerImg.scaleToHeight(125);
        playerImg.set({
            top:y,
            left:x
        });
        canvas.add(playerImg);
    });
}

function new_image(getimage) {
    fabric.Image.fromURL(getimage, function(Img) {
        blockImg = Img;
        blockImg.scaleToHeight(height);
        blockImg.scaleToWidth(width);
        blockImg.set({
            top:y,
            left:x
        });
        canvas.add(blockImg);
    });
}
window.addEventListener("keydown",joir);

function joir(e) {
    var tran = e.keyCode;
    console.log(tran);
    if(tran == "70"){
        new_image("ironman_face.png");
        console.log("f");
    }
    if(tran == "66"){
        new_image("spiderman_body.png");
        console.log("b");
    }
    if(tran == "76"){
        new_image("hulk_legs.png");
        console.log("l");
    }
    if(tran == "82"){
        new_image("thor_right_hand.png");
        console.log("r");
    }
    if(tran == "72"){
        new_image("captain_america_left_hand.png");
        console.log("h");
    }
    if(tran == "37"){
        left();
        console.log("left");
    }
    if(tran == "38"){
        up();
        console.log("up");
    }
    if(tran == "39"){
        right();
        console.log("right");
    }
    if(tran == "40"){
        down();
        console.log("down");
    }

}
function up(){
    if(y >= 0){
        y = y - height;
        console.log("up");
        canvas.remove(playerImg);
        player_update();
    }
}

function right(){
    if(x <= 750){
        x = x + width;
        console.log("right");
        canvas.remove(playerImg);
        player_update();
    }
}

function left(){
    if(x >= 0){
        x = x - width;
        console.log("left");
        canvas.remove(playerImg);
        player_update();
    }
}

function down(){
    if(y <= 550){
        y = y + height;
        console.log("down");
        canvas.remove(playerImg);
        player_update();
    }
}