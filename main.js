canvas = new fabric.Canvas("canvas");
var height = 30;
var width = 30;
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