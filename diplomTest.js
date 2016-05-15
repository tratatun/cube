    var camera, scene, render, container;
    var W, H;

    var white = 0xE5E5E5;
    var yellow = 0xFFFF00;
    var red = 0xFF0000;
    var orange = 0xFFA500;
    var blue = 0x0000FF;
    var green = 0x008000;

    var pink = 0xFF69B4;
    var black = 0x000000;

    var geomX = 1;
    var geomY = 1;
    var geomZ = 1;

    var SUBCUBE_SIZE = 300;
    var SUBCUBE_DISTANCE_INDEX = 1.1;


    var CUBE_DIMENSION = 7; ////////////////////////////////----------////////////////////////////////////////

    function Side(faces, color) {
        this.faces = faces || [];
        this.color = color;
    }

    var right = new Side([geomX * 0, geomX * 2 - 1], red);
    var left = new Side([geomX * 2, geomX * 4 - 1], orange);

    var up = new Side([geomX * 4 + geomY * 0, geomX * 4 + geomY * 2 - 1], white);
    var down = new Side([geomX * 4 + geomY * 2, geomX * 4 + geomY * 4 - 1], yellow);

    var front = new Side([geomX * 4 + geomY * 4 + geomZ * 0, geomX * 4 + geomY * 4 + geomZ * 2 - 1], green);
    var back = new Side([geomX * 4 + geomY * 4 + geomZ * 2, geomX * 4 + geomY * 4 + geomZ * 4 - 1], blue);

    var cubePieces = [];
    var cubeOneDimention = [];

    var sizeShift = ~~(CUBE_DIMENSION / 2);
    var centerShift = CUBE_DIMENSION % 2 == 0 ? 0.5 : 0;

    var AXIS_X = new THREE.Vector3(1, 0, 0);
    var AXIS_Y = new THREE.Vector3(0, 1, 0);
    var AXIS_Z = new THREE.Vector3(0, 0, 1);

    W = window.innerWidth - 40; //hardcode - disable scrollbars TODO fix tomorow...
    H = window.innerHeight - 40;

    container = document.createElement('div');
    document.body.appendChild(container);

    function Side(faces, color) {
    this.faces = faces || [];
    this.color = color;
}

var right = new Side([geomX * 0, geomX * 2 - 1], red);
var left = new Side([geomX * 2, geomX * 4 - 1], orange);

var up = new Side([geomX * 4 + geomY * 0, geomX * 4 + geomY * 2 - 1], white);
var down = new Side([geomX * 4 + geomY * 2, geomX * 4 + geomY * 4 - 1], yellow);

var front = new Side([geomX * 4 + geomY * 4 + geomZ * 0, geomX * 4 + geomY * 4 + geomZ * 2 - 1], green);
var back = new Side([geomX * 4 + geomY * 4 + geomZ * 2, geomX * 4 + geomY * 4 + geomZ * 4 - 1], blue);
    
    var cameraMaxLength = CUBE_DIMENSION * 5000 + 3000;
    camera = new THREE.PerspectiveCamera(60, W / H, 1, cameraMaxLength);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = CUBE_DIMENSION * 500 + 1000;
    scene = new THREE.Scene();

    var light1 = new THREE.PointLight();
    var light2 = new THREE.PointLight();
    var a = CUBE_DIMENSION * 5000;
    light1.position.set(a, a, a);
    light2.position.set(-a, -a, -a);
    light1.intensity = 1.7;
    light2.intensity = 1.7;
    scene.add(light1);
    scene.add(light2);



    render = new THREE.WebGLRenderer();
    render.setSize(W, H);
    container.appendChild(render.domElement);
    render.setClearColor(0xffffff,1);
    var geom = new THREE.CubeGeometry(300,300,300,4,4,4);
    var mater = new THREE.MeshBasicMaterial({
        vertexColors : THREE.FaceColors
    });
    var i=0;
    while(geom.faces[i]){
    geom.faces[i].color.setHex(black);
    i++;
    } 
    var i=0;
    while(geom.faces[i]){
    geom.faces[i].color.setHex(red);
    i+=2;
    } 
    geom.faces[0].color.setHex(red);
    geom.faces[8].color.setHex(red);
    geom.faces[6].color.setHex(red);
    geom.faces[10].color.setHex(red);
    geom.faces[22].color.setHex(red);
    geom.faces[20].color.setHex(red);
    geom.faces[24].color.setHex(red);
    geom.faces[26].color.setHex(red);
    geom.faces[4].color.setHex(red);
    var cube = new THREE.Mesh(geom,mater);
    scene.add(cube);

    animate();



    function animate() {
        requestAnimationFrame(animate);
        
        camera.lookAt(scene.position);
        render.render(scene, camera);
    }
        
    controls = new THREE.OrbitControls(camera, render.domElement); // вращение камеры

    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        render.setSize(window.innerWidth, window.innerHeight);

    }
    window.onload = function () {};
