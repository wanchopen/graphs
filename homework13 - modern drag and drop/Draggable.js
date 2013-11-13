function Draggable(element, dragStart, dragDrop){
    this._element = element;
    this.dragMe = this.dragMe.bind(this);
    this.dropMe = this.dropMe.bind(this);

    this._element.classList.add('draggable');

    this._element.addEventListener('mousedown', this.move.bind(this));

    this._originalElement = {
        x: 0,
        y: 0
    };

    this._originalMouse = {
        x: 0,
        y: 0
    };

    this._originalSize = this._element.style.width;
}

Draggable.prototype.move = function(event){

    document.body.addEventListener('mousemove', this.dragMe);
    document.body.addEventListener('mouseup', this.dropMe);

    var elementStyleLeft = this._element.style.left,
        elementStyleTop = this._element.style.top;

    this._originalElement.x = parseInt(elementStyleLeft);
    this._originalElement.y = parseInt(elementStyleTop);

    this._originalMouse.x = event.pageX;
    this._originalMouse.y = event.pageY;

    var elementStyleWidth = this._element.style.width;
    var elementStyleHeight = this._element.style.height;

    this._originalSize = parseInt(elementStyleWidth * 1.5 + "px");
    this._originalSize = parseInt(elementStyleHeight * 1.5 + "px");


};

Draggable.prototype.dragMe = function(event){
    var currentMouse = {
        x: event.pageX,
        y: event.pageY
    };

    this._element.style.left = this._originalElement.x + currentMouse.x - this._originalMouse.x + "px";
    this._element.style.top = this._originalElement.y + currentMouse.y - this._originalMouse.y + "px";

};

Draggable.prototype.dropMe = function(event){

    document.body.removeEventListener('mousemove',this.dragMe);
    document.body.removeEventListener('mouseup',this.dropMe);
};