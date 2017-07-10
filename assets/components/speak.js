AFRAME.registerComponent('speak', {
  schema: {
    on: {type: 'string'},
    word: {type: 'string'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener(data.on, function () {
      responsiveVoice.speak(data.word);
    });
  }
});