
var renderer; 
var scene; 
var camera;   
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
    
    //Argumento - raio, nº segmentos largura, nº segmentos altura
    var sphereGeometry = new THREE.SphereGeometry(20, 150, 150);
    //MeshNormalMaterial é útil quando se quer testar a geometria dos objetos
    var sphereMaterial = new THREE.MeshNormalMaterial();
    var earthMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    earthMesh.name = 'earth';
    scene.add(earthMesh);



    //Posicionar a camera e apontar para o centro da cena
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 35;
    camera.position.y = 36;
    camera.position.z = 33;
    camera.lookAt(scene.position);

    // Interação com rato para rodar a camera
    cameraControl = new THREE.OrbitControls(camera);

    //Adicionar fonte de luz à cena
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(10, 20, 20);
    spotLight.shadowCameraNear = 20;
    spotLight.shadowCameraFar = 50;
    spotLight.castShadow = true;

    //Adicionar fonte de luz à cena
    scene.add(spotLight);

    addStatsObject();
    
    document.body.appendChild(renderer.domElement); 
    render();            
}