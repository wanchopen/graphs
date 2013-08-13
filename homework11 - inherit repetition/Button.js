var Button = function(name, el){
    this.name = name;
    el.addEventListener("click", this.onclick.bind(this), false);
};

Button.prototype.onclick = function(){
    console.log(this.name);
};

