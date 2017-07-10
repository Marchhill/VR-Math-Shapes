AFRAME.registerComponent('info-swap', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    thumb: {type: 'selector'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    
    console.log(data.thumb);

    el.addEventListener(data.on, function () {
       if (!el.dataset.made) {
           data.target.setAttribute('geometry', {primitive: 'plane', height: '5', width: '3'});
           el.dataset.made = true;
       }
      data.target.setAttribute('material', 'src', data.thumb.src);
    });
  }
});