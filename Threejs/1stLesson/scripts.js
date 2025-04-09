import * as THREE from 'three'

console.log(THREE)
console.log('Hello Three.js!')

const canvas=document.querySelector('canvas.webgl') //canvas is like a screen that displays the scene
console.log(canvas)


//we need 4 things to create a scene
//1. scene
//2. objects
//3. camera
//4. renderer

//setup the scene

//scene is like a container where we store all the objects
//objects are like the things we see in the scene(like cube,sphere, books, etc)
//camera is like a human eye that sees the scene

//renderer is like a screen that displays the scene
const scene =new THREE.Scene()


//create a geometry object
const geometry=new THREE.BoxGeometry(1,1,1) //cube(height=1,width=1,depth=1)
const matrial=new THREE.MeshBasicMaterial({color:"orange",wireframe:true}) //material is like the color of the object(how it should appear)

const cube=new THREE.Mesh(geometry,matrial) //mesh is a combination of geometry and material
scene.add(cube)


const sizes={
    width:800,
    height:600
}
//create a camera
const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height)  //params are field of view(itis like from 0deg to 360deg) ,apect ratio(width/height)
camera.position.z=3


scene.add(camera) 

//render the scene
const renderer=new THREE.WebGLRenderer({
    canvas:canvas
})

renderer.setSize(sizes.width,sizes.height) //set the size of the screen
function animate() {
    requestAnimationFrame(animate);
    
    cube.rotation.x =cube.rotation.x+0.03
   
    renderer.render(scene, camera); // 📸 render scene via camera
  }

  animate()
/*what is mesh?
mesh is a combination of geometry and material
why do we need mesh?
mesh is used to create a 3D object from a geometry and material
geometry is like the shape of the object
material is like the color of the object
mesh is like the object itself

*/