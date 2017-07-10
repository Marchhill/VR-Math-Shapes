AFRAME.registerComponent('spin', {
    schema: {
        speed: {type: "number", default: 50}
    },
    init: function() {
        var el = this.el;
        var data = this.data;
        
        this.setupSpin(el, data);
        
        el.emit("start_spin");
    },
    setupSpin: function(el, data) {
        var speed = data.speed;
        
        // Only set up once.
        if (el.dataset.spinning) { return; }
        el.dataset.spinning = true;
        
        el.setAttribute('animation__spin', {
            property: "rotation",
            startEvents: "start_spin",
            dur: 360/speed * 1000,
            easing: "linear",
            from: "0 0 0",
            to: "0 360 0",
            loop: true
        });
    }
});