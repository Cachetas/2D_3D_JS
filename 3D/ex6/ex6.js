
var renderer; 
var scene; 
var camera;   
var cube;
var cubeMaterial; 
var cubeGeometry;
var cameraControl;
var stats;


function addStatsObject() {
  stats = new Stats();
  
  stats.setMode(0); // 0 - Frames per second; 1 - Number of milliseconds needed to render the frame
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = 'opx';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
}


function render() {
    stats.update();
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    cameraControl.update();
}

function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function iniciar() {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer(); 
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    
    //Criar o Cubo
    cubeGeometry = new THREE.BoxGeometry(6, 6, 6);
    cubeMaterial = new THREE.MeshLambertMaterial({color: 'red'});
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.position.x = 0; cube.position.y = 0; cube.position.z = 0;
    scene.add(cube);



    //Posicionar a camera e apontar para o centro da cena
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 25;
    camera.lookAt(scene.position);

    // Interação com rato para rodar a camera
    cameraControl = new THREE.OrbitControls(camera);

    //Adicionar fonte de luz à cena
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(10, 20, 20);
    spotLight.shadowCameraNear = 20;
    spotLight.shadowCameraFar = 50;
    spotLight.castShadow = true;

    var spotLight2 = new THREE.SpotLight(0xffffff);
    spotLight2.position.set(-10, -20, 20);
    spotLight2.shadowCameraNear = 20;
    spotLight2.shadowCameraFar = 50;
    spotLight2.castShadow = true;

    //Adicionar fonte de luz à cena
    scene.add(spotLight);
    scene.add(spotLight2);
    addStatsObject();
    
    document.body.appendChild(renderer.domElement); 
    render();            
}