/* global AFRAME */

AFRAME.registerComponent('world-position', {
  tick: function () {
    console.log(this.el.object3D.getWorldPosition());
  }
});
