var canvas=new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;
SuperWomen_x=10;
SuperWomen_y=10;
var SuperWomen_object="";
function SuperWomen_update() {
    fabric.Image.fromURL("Super Women.jpg",function(Img) {
    SuperWomen_object=Img;
   SuperWomen_object.scaleToWidth(150);
    SuperWomen_object.scaleToHeight(140);
    SuperWomen_object.set({
    top:SuperWomen_y,left:SuperWomen_x
    });
    canvas.add(SuperWomen_object);
    });
}
function new_Image(get_image) {
fabric.Image.fromURL(get_image,function(Img){
block_image_object=Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
    top:SuoerWomen_y,left:SuperWomen_x
});
canvas.add(block_image_object);
});
}
player