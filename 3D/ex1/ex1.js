
var renderer; var scene; var camera;    

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
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
    
    //Criar um cubo
    var cubeGeometry = new THREE.BoxGeometry(6, 5, 6);
    var cubeMaterial = new THREE.MeshLambertMaterial ({color: 'red'});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.position.x = 0; cube.position.y = 0; cube.position.z = 0;

    scene.add(cube);

    //Criar um plano
    var planeGeometry = new THREE.PlaneGeometry(20, 20);
    var planeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;

    //Determinar a posição do plano
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 0;
    plane.position.y = -2;
    plane.position.z = 0;

    //Adicionar o plano à cena
    scene.add(plane);
   
    //Posicionar a camera e apontar para o centro da cena
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 15;
    camera.position.y = 16;
    camera.position.z = 13;
    camera.lookAt(scene.position);

    //Adicionar fonte de luz à cena
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(10, 20, 20);
    spotLight.shadowCameraNear = 20;
    spotLight.shadowCameraFar = 50;
    spotLight.castShadow = true;

    //Adicionar fonte de luz à cena
    scene.add(spotLight);
    
    document.body.appendChild(renderer.domElement); 
    render();            
}