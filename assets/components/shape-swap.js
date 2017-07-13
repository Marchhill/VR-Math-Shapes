AFRAME.registerComponent('shape-swap', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    shape: {type: 'string'},
    size: {type: 'string'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener(data.on, function () {
      var size = data.size.split(" ");
      var width = size[0];
      var height = size[1];
      var depth = size[2];
      
      data.target.setAttribute('geometry', {primitive: data.shape, width: width, depth: depth, height: height});
    });
  }
});
