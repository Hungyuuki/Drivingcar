class Coin {
    constructor(x, y, radius, color) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._color = color;
    }

    _radius;
    _color;
    _x;
    _y;
    _img;

    drawCoin(ctx) {
        let image = new Image();
        image.src = this._img;

        ctx.beginPath();
        ctx.fillStyle = this._color;
        /*let randomX = Math.random() * canvas.clientWidth;
        let randomY = Math.random() * canvas.clientHeight;*/
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
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

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }

    moveDown() {
        /*  if (this.y + this._height > canvas.clientHeight) {
              return;
          }*/
        this._y += 5;
    }
}