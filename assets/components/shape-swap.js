AFRAME.registerComponent('shape-swap', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    shape: {type: 'string'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener(data.on, function () {
      data.target.setAttribute('geometry', 'primitive', data.shape);
    });
  }
});