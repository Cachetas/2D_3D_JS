
var renderer; 
var scene; 
var camera;   
var earthMesh
var cameraControl;
var stats;
var day; var night;

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

    /* earthMesh.rotation.x += 0.01; */
    earthMesh.rotation.y += 0.005;
   /*  earthMesh.rotation.z += 0.01; */

    renderer.render(scene, camera);
    requestAnimationFrame(render);
    cameraControl.update();
}

function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

  day = "../8k_earth_daymap.jpg";
  night = "../8k_earth_nightmap.jpg";

function createEarthMaterial() {
  var earthTexture = THREE.ImageUtils.loadTexture(night);
  //Este tipo de material não é influenciado pelas fontes de luz
  var earthMaterial = new THREE.MeshBasicMaterial();
  earthMaterial.map = earthTexture;
  return earthMaterial;
}


function iniciar() {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer(); 
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    
    var sphereGeometry = new THREE.SphereGeometry(15, 30, 30);
    var sphereMaterial = createEarthMaterial();
    earthMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
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

    addStatsObject();
    
    document.body.appendChild(renderer.domElement); 
    render();            
}