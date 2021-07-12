
var renderer; 
var scene; 
var camera;   
var earthMesh;
var sunMesh;
var sunMaterial;
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
    earthMesh.rotation.y += 0.005; 
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
  var earthTexture = new THREE.ImageUtils.loadTexture(day);
  
  //Este tipo de material é influenciado pelas fontes de luz
  var earthMaterial = new THREE.MeshPhongMaterial();
  earthMaterial.map = earthTexture;
  return earthMaterial;
}

function createSunMaterial() {
  var sunTexture = THREE.ImageUtils.loadTexture("../4k_sun.jpg");
  //Este tipo de material é influenciado pelas fontes de luz
  sunMaterial = new THREE.MeshBasicMaterial();
  sunMaterial.map = sunTexture;
  return sunMaterial;
}

function createMoonMaterial() {
  var moonTexture = THREE.ImageUtils.loadTexture("../2k_moon.jpg");
  //Este tipo de material é influenciado pelas fontes de luz
  varmoonMaterial = new THREE.MeshPhongMaterial();
  moonMaterial.map = moonTexture;
  return moonMaterial;
}



function iniciar() {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer(); 
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    //Argumentos - raio, no segmentos largura, no segmentos altura
    var sphereGeometry = new THREE.SphereGeometry(15, 100, 100);
    var sphereMaterial = createEarthMaterial();
    earthMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    earthMesh.name = 'earth';
    earthMesh.position.x = -150;
    earthMesh.position.z = 100;
    scene.add(earthMesh);

    var sphereGeometry2 = new THREE.SphereGeometry(5, 100, 100);
    var sphereMaterial2 = createEarthMaterial();
    moonMesh = new THREE.Mesh(sphereGeometry2, sphereMaterial2);
    moonMesh.name = 'moon';
    moonMesh.position.x = -100;
    moonMesh.position.z = 100;
    scene.add(moonMesh);

    sphereGeometry = new THREE.SphereGeometry(50, 100, 100);
    sphereMaterial = createSunMaterial();
    sunMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sunMesh.name = 'sun';
    scene.add(sunMesh);

    //Posicionar a camera e apontar para o centro da cena
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 150;
    camera.position.y = 100;
    camera.position.z = 200;
    camera.lookAt(scene.position);

    // Interação com rato para rodar a camera
    cameraControl = new THREE.OrbitControls(camera);

 const light = new THREE.PointLight( 0xffffff, 1, 10000 );
 light.position.set( 0, 0, 0 );
 light.power = 1000;
 light.distance = 0;
  
 scene.add( light );

    var ambientLight = new THREE.AmbientLight(0x202020);
    scene.add(ambientLight);     
    addStatsObject();
    
    document.body.appendChild(renderer.domElement); 
    render();            
}