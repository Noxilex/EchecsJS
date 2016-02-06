var Piece = function(name, color, img, x, y){
    this.name = name;
    this.color = color;
    this.img = img;
    this.x = x;
    this.y = y;
}

Piece.prototype.getMove = function(){

}

Piece.prototype.draw = function(gfx){
    gfx.drawImage(img, x, y, );
}
