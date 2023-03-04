let scene,camera,renderer,axes;
let set = [];

let createGeometry = function()
{
    set.push(new THREE.Vector3(5,5,10) );
    set.push(new THREE.Vector3(10,15,17));
    set.push(new THREE.Vector3(15,20,12));
    set.push(new THREE.Vector3(20,16,10));
    set.push(new THREE.Vector3(17,9,19));
    set.push(new THREE.Vector3(23,2,13));

    let setgeometry = new THREE.BufferGeometry().setFromPoints(set);
    let setmaterial = new THREE.PointsMaterial({ color : 0xff0000 , size : 10 ,sizeAttenuation : false});
    let plot = new THREE.Points( setgeometry , setmaterial );

    scene.add(plot);

}    
let init = function(){
    scene = new THREE.Scene;
    scene.background = new THREE.Color(0x000000);

    camera = new THREE.PerspectiveCamera(25 , window.innerWidth/window.innerHeight , 1 , 1000);

    let axes =new THREE.AxesHelper(25);
    scene.add(axes);

    createGeometry();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

};

let mainloop = function(t){
    let time = t / 1000;
    camera.position.set(
        Math.sin(time) * 70,
        70,
        Math.cos(time) * 70);
    camera.lookAt(0,0,0);
    renderer.render(scene , camera);
    requestAnimationFrame(mainloop);
};

init();
mainloop(0);