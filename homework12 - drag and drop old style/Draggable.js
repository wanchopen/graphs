function Draggable(element){
    this.onMouseMoveHandler = this.onMouseMove.bind(this);
    this.onMouseUpHandler = this.onMouseUp.bind(this);
    this._el = element;
    this._el.addEventListener("mousedown", this.onMouseDown.bind(this));
    this._startElementPosition = {
        x: 0,
        y: 0
    };
    this._startMousePosition = {
            x: 0,
            y: 0
        };
}

Draggable.prototype.onMouseDown = function(event){
    document.body.addEventListener("mousemove", this.onMouseMoveHandler);
    document.body.addEventListener("mouseup", this.onMouseUpHandler);

    var elementStyleLeft = this._el.style.left,
        elementStyleTop = this._el.style.top;

    this._startElementPosition.x = parseInt(elementStyleLeft);
    this._startElementPosition.y = parseInt(elementStyleTop);

    this._startMousePosition.x = event.pageX;
    this._startMousePosition.y = event.pageY;
};

Draggable.prototype.onMouseMove = function(event){
    var currentMousePosition = {
        x: event.pageX,
        y: event.pageY
    };

    this._el.style.top = this._startElementPosition.y + currentMousePosition.y - this._startMousePosition.y + 'px';
    this._el.style.left = this._startElementPosition.x + currentMousePosition.x - this._startMousePosition.x + 'px';
    this._el.style.borderColor = '#6A5ACD';
    this._el.style.borderWidth = 3 + 'px';
};

Draggable.prototype.onMouseUp = function(){
    document.body.removeEventListener("mousemove", this.onMouseMoveHandler);
    document.body.removeEventListener("mouseup", this.onMouseUpHandler);
};
