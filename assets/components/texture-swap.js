AFRAME.registerComponent('texture-swap', {
  schema: {
    on: {type: 'string'},
    textureName: {type: 'string'}
  },
startTexture: function(data, el) {
    var first = document.getElementById(data.textureName + "1");
    
    if(first) {
        el.setAttribute("material", {
            src: first.src
        });
    }
  },
  init: function () {
    var data = this.data;
    var el = this.el;
    var resetTexture = this.startTexture;
    
    resetTexture(data, el);
    
    if (el.dataset.textureNum != 1) { el.dataset.textureNum = 1; }
    
    el.addEventListener(data.on, function () {
        el.dataset.textureNum = parseInt(el.dataset.textureNum) + 1;
        var next = document.getElementById(data.textureName + el.dataset.textureNum);
        if(next) {
            el.setAttribute("material", {
                src: next.src
            });
        }
        else {
            resetTexture(data, el);
            el.dataset.textureNum = 1;
        }
    });
  }
});