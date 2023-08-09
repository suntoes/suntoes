<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

	let container;
	function easeOutCirc(x) {
		return Math.sqrt(1 - Math.pow(x - 1, 4));
	}

	onMount(() => {
		//const scW = container.clientWidth;
		const scH = container.clientHeight;

		const renderer = new THREE.WebGLRenderer({
			antialis: true,
			alpha: true
		});
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(container.clientWidth, container.clientHeight);
		//turn on shadows in the renderer
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

		container.appendChild(renderer.domElement);

		const scene = new THREE.Scene();

		const target = new THREE.Vector3(-0.5, 1.2, 0);
		const initialCameraPosition = new THREE.Vector3(
			20 * Math.sin(0.2 * Math.PI),
			10,
			20 * Math.cos(0.2 * Math.PI)
		);

		// 640 -> 240
		// 8   -> 6
		const scale = scH * 0.005 + 4.8;
		const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);
		camera.position.copy(initialCameraPosition);
		camera.lookAt(target);

		//Create a DirectionalLight and turn on shadows for the light
		const light = new THREE.DirectionalLight(0xffffff, 5);
		light.position.set(0, 3, -1); //default; light shining from top
		light.castShadow = true; // default false
		scene.add(light);

		//Set up shadow properties for the light
		light.shadow.mapSize.width = 512; // default
		light.shadow.mapSize.height = 512; // default
		light.shadow.camera.near = 0.5; // default
		light.shadow.camera.far = 500; // default

		const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
		scene.add(ambientLight);

		const controls = new OrbitControls(camera, renderer.domElement);
		controls.autoRotate = true;
		controls.target = target;

		// Load GLB model
		const loader = new GLTFLoader();
		loader.load('/merry-go.glb', (gltf) => {
			const model = gltf.scene;
			model.name = 'merry-go';
			model.position.y = 0;
			model.position.x = 0;
			model.position.z = 0;
			model.rotateX(-45);
			model.rotateY(45);
			model.rotateZ(45);
			model.receiveShadow = true;
			model.castShadow = true;
			scene.add(model);

			// Add lighting
			const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
			scene.add(ambientLight);

			const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
			directionalLight.position.set(1, 1, 0);
			scene.add(directionalLight);

			animate();
		});

		// Resize handling
		const handleResize = () => {
			const newWidth = container.clientWidth;
			const newHeight = container.clientHeight;

			camera.aspect = newWidth / newHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(newWidth, newHeight);
		};

		window.addEventListener('resize', handleResize);

		let req = null;
		let frame = 0;
		function animate() {
			req = requestAnimationFrame(animate);

			frame = frame <= 100 ? frame + 1 : frame;

			if (frame <= 100) {
				const p = initialCameraPosition;
				const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

				camera.position.y = 10;
				camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
				camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
				camera.lookAt(target);
			} else {
				controls.update();
			}

			renderer.render(scene, camera);
		}

		// Clean up
		return () => {
			window.removeEventListener('resize', handleResize);
			container.removeChild(renderer.domElement);
			cancelAnimationFrame(req);
			renderer.domElement.remove();
			renderer.dispose();
		};
	});
</script>

<div bind:this={container} class="glb-container mb-0 h-[250px] w-[250px] sm:mb-4 md:mb-8" />
