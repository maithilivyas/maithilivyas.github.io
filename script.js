// --- PART 1: BACKGROUND STARS (FIXED SHAPE) ---
const starContainer = document.getElementById('star-container');
const sceneBG = new THREE.Scene();
const cameraBG = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const rendererBG = new THREE.WebGLRenderer({ alpha: true });

rendererBG.setSize(window.innerWidth, window.innerHeight);
starContainer.appendChild(rendererBG.domElement);

// FUNCTION TO CREATE A CIRCLE TEXTURE (Removes Squares)
function getStarTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
}

const geometry = new THREE.BufferGeometry();
const count = 3000;
const positions = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);

for(let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100;
    colors[i] = Math.random();
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
    size: 0.5, 
    map: getStarTexture(), 
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    depthWrite: false, 
    blending: THREE.AdditiveBlending
});

const starMesh = new THREE.Points(geometry, material);
sceneBG.add(starMesh);
cameraBG.position.z = 20;

// --- PART 2: HERO 3D OBJECT ---
const objectContainer = document.getElementById('hero-object-container');
const sceneObj = new THREE.Scene();
const cameraObj = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
const rendererObj = new THREE.WebGLRenderer({ alpha: true, antialias: true });

rendererObj.setSize(300, 300);
objectContainer.appendChild(rendererObj.domElement);

const geoObj = new THREE.IcosahedronGeometry(2, 1);
const matObj = new THREE.MeshBasicMaterial({ 
    color: 0x00f3ff, 
    wireframe: true 
});
const heroShape = new THREE.Mesh(geoObj, matObj);
sceneObj.add(heroShape);
cameraObj.position.z = 6;

// --- ANIMATION LOOP ---
const animate = () => {
    requestAnimationFrame(animate);
    starMesh.rotation.y += 0.0005; 
    starMesh.rotation.x += 0.0002;
    heroShape.rotation.x += 0.01;
    heroShape.rotation.y += 0.01;
    rendererBG.render(sceneBG, cameraBG);
    rendererObj.render(sceneObj, cameraObj);
};
animate();

window.addEventListener('resize', () => {
    cameraBG.aspect = window.innerWidth / window.innerHeight;
    cameraBG.updateProjectionMatrix();
    rendererBG.setSize(window.innerWidth, window.innerHeight);
});

// --- PART 3: SMOOTH SCROLL REVEAL ---
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
