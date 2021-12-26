class Rider{
    _x;
    _y;
    _width;
    _height;
    _speed;
    _img;


    constructor(x, y, width, height, speed, img) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._speed = speed;
        this._img = img;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }
    moveLeft(){
        myRider._x -= myRider._speed;
    }
    moveUp(){
        myRider._y -= myRider._speed;
    }
    moveDown(){
        myRider._y += myRider._speed;
    }
    moveRight(){
        myRider._x += myRider._speed;
    }
    upSpeed(){
        myRider._speed *=2;
    }
    drawRider(ctx) {

        let image = new Image();
        image.src = this._img;
       // image.onload = () => {
            // ctx.drawImage(image, this._x, this._y, this._width, this._height)

            let topLeftX = this._x - this._width / 2;
            let topLeftY = this._y - this._height / 2;
            ctx.drawImage(image, topLeftX, topLeftY, this._width, this._height)
        }
    //}
}