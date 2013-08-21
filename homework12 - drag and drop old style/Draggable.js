function Draggable(element){
    this.el = element;
    this.el.addEventListener("mousedown", this.onMouseDown.bind(this));
    this.startElementPosition = {
        x: 0,
        y: 0
    };
    this.startMousePosition = {
            x: 0,
            y: 0
        };
}

Draggable.prototype.onMouseDown = function(event){
    document.body.addEventListener("mousemove", this.onMouseMove.bind(this));
    document.body.addEventListener("mouseup", this.onMouseUp.bind(this));

    var elementStyleLeft = this.el.style.left;

    var styleLeft = function(){
        return parseInt(elementStyleLeft);
    };

    var elementStyleTop = this.el.style.top;

    var styleTop = function(){
        return parseInt(elementStyleTop);
    };

    this.startElementPosition.x =  styleLeft();
    this.startElementPosition.y =  styleTop();

    this.startMousePosition.x = event.pageX;
    this.startMousePosition.y = event.pageY;
};

Draggable.prototype.onMouseMove = function(event){
    var currentMousePosition = {
        x: event.pageX,
        y: event.pageY
    };

    this.el.style.top = this.startElementPosition.y + currentMousePosition.y - this.startMousePosition.y + 'px';
    this.el.style.left = this.startElementPosition.x + currentMousePosition.x - this.startMousePosition.x + 'px';
};

Draggable.prototype.onMouseUp = function(){
    document.body.removeEventListener("mousemove", this.onMouseMove.bind(this));
    document.body.removeEventListener("mouseup", this.onMouseUp.bind(this));
};
