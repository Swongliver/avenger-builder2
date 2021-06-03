canvas=new fabric.Canvas("myCanvas")
var player_X=10;
var player_Y=10;
var block_height=30;
var block_width=30;
var player_object="";
var block_object="";


function player_update(){
    fabric.Image.fromURL("player.png", function (Img){
    player_object = Img;
    player_object.scaleToWidth(100);
    player_object.scaleToHeight(100);
    
    player_object.set({
        top:player_Y,
        left:player_X
    });
    canvas.add(player_object);
});
}
function player_object1(getImage){
    fabric.Image.fromURL(getImage, function (Img){
   block_object = Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    
    block_object.set({
        top:player_Y,
        left:player_X
    });
    canvas.add(block_object);
});
}
window.addEventListener("keydown", keyDown)
keyPressed=e.keyCode
function keyDown(){
    if (keyPressed=="70") {
        player_object1("ironman_face.png")
        
    }
    if (keyPressed=="66") {
        player_object1("spiderman_body.png")
        
    }
    if (keyPressed=="76") {
        player_object1("hulk_legs.png")
        
    }
    if (keyPressed=="82") {
        player_object1("thor_right_hand.png")
        
    }
    if (keyPressed=="72") {
        player_object1("captain_america_left_hand.png")
        
    }
    if (keyPressed=="38") {
        up();
        }
        if (keyPressed=="40") {
            down();
        }
        if (keyPressed=="39") {
            right();
        }
        if (keyPressed=="37") {
            left();
        }
}
