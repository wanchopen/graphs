var div = document.getElementById("draggable_square"),
    startElementPosition = {
        x: 0,
        y: 0
    },
    startMousePosition = {
        x: 0,
        y: 0
    };

div.addEventListener("mousedown", onMouseDown);

function onMouseDown(event){
    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp);

    startElementPosition.x = parseInt(div.style.left);
    startElementPosition.y = parseInt(div.style.top);

    startMousePosition.x = event.pageX;
    startMousePosition.y = event.pageY;
}

function onMouseMove(event){
    var currentMousePosition = {
        x: event.pageX,
        y: event.pageY
};

    div.style.top = startElementPosition.y + currentMousePosition.y - startMousePosition.y + 'px';
    div.style.left = startElementPosition.x + currentMousePosition.x - startMousePosition.x + 'px';
}

function onMouseUp(){
    document.body.removeEventListener("mousemove", onMouseMove);
    document.body.removeEventListener("mouseup", onMouseUp);
}