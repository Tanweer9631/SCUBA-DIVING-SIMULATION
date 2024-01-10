AFRAME.registerComponent('rotation-script', {
    tick: function () {
        this.el.object3D.rotation.y += 0.005;
    }
});

AFRAME.registerComponent('scuba-diver', {
    init: function () {
        this.el.setAttribute('rotation', { x: 0, y: 180, z: 0 });

        window.addEventListener('keydown', (event) => {
            const diver = document.getElementById('scuba-diver');
            if (event.key === 'ArrowUp') {
                diver.object3D.position.z -= 0.1;
            } else if (event.key === 'ArrowDown') {
                diver.object3D.position.z += 0.1;
            } else if (event.key === 'ArrowLeft') {
                diver.object3D.rotation.y += 0.1;
            } else if (event.key === 'ArrowRight') {
                diver.object3D.rotation.y -= 0.1;
            }
        });
    }
});