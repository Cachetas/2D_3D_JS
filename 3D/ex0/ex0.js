
var renderer;var scene;var camera;    
function render() {
    //Visualizar a cena utilizado a camera
    renderer.render(scene, camera);
    //Render loop. O browser determina qual é a melhor altura para chamar a função
    requestAnimationFrame(render);
}
function iniciar() {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer(); renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 15;camera.position.y = 16;camera.position.z = 13;
    camera.lookAt(scene.position);
    document.body.appendChild(renderer.domElement); render();            
}
