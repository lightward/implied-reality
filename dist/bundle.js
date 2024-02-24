/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst THREE = __webpack_require__(/*! three */ \"./node_modules/three/build/three.cjs\");\nclass SphereWithRods {\n    constructor() {\n        this.rods = [];\n        this.rodCount = 0;\n        this.targetRodCount = 100; // Example target count, adjust as needed\n        this.minInterval = 100; // Minimum interval time in ms\n        this.maxInterval = 1000; // Maximum interval time in ms\n        this.animate = () => {\n            requestAnimationFrame(this.animate);\n            // Parameters for the camera's orbit\n            const radius = 5; // Distance from the center of the scene\n            const orbitSpeed = 0.0005; // Speed of the orbit\n            const time = Date.now() * orbitSpeed;\n            // Calculate the new camera position\n            this.camera.position.x = radius * Math.sin(time);\n            this.camera.position.y = 0; // Keep the camera at the same level as the sphere\n            this.camera.position.z = radius * Math.cos(time);\n            // Always look at the center of the scene\n            this.camera.lookAt(new THREE.Vector3(0, 0, 0)); // Adjust as necessary if your sphere's center is not at the origin\n            this.renderer.render(this.scene, this.camera);\n        };\n        this.scene = new THREE.Scene();\n        // Set the background color to a darker shade\n        this.scene.background = new THREE.Color(0x0a0a0a); // Dark grey\n        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        this.renderer = new THREE.WebGLRenderer({ alpha: true });\n        this.renderer.setSize(window.innerWidth, window.innerHeight);\n        document.body.appendChild(this.renderer.domElement);\n        this.camera.position.set(5, 5, 5);\n        this.camera.lookAt(this.scene.position);\n        // Rod material with semi-transparency\n        this.rodMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });\n        // Setup lighting\n        const ambientLight = new THREE.AmbientLight(0x404040);\n        this.scene.add(ambientLight);\n        // Start the rod placement and camera animation\n        this.startPlacingRods();\n        this.animate();\n    }\n    placeRod() {\n        // Define the base and maximum length of the rods\n        const baseLength = 1; // Assuming R = 1 for simplicity\n        const maxLength = 4; // 4R\n        // Generate a random length with 2R being the most likely\n        const randomFactor = Math.pow(Math.random(), 2); // Squaring the random number to skew towards lower values\n        const lengthVariance = (maxLength - baseLength) * randomFactor;\n        const rodLength = baseLength + lengthVariance;\n        const rodGeometry = new THREE.CylinderGeometry(0.01, 0.01, rodLength, 32);\n        const rod = new THREE.Mesh(rodGeometry, this.rodMaterial);\n        // Random spherical coordinates\n        const phi = Math.random() * 2 * Math.PI; // Azimuthal angle\n        const theta = Math.random() * Math.PI; // Polar angle\n        const jitter = 0.9 + Math.random() * 0.2; // Jitter for radius (0.9 to 1.1)\n        // Convert spherical to Cartesian coordinates\n        const x = jitter * Math.sin(theta) * Math.cos(phi);\n        const y = jitter * Math.sin(theta) * Math.sin(phi);\n        const z = jitter * Math.cos(theta);\n        rod.position.set(x, y, z);\n        // Orient rod tangent to sphere\n        rod.lookAt(this.scene.position);\n        this.scene.add(rod);\n        this.rods.push(rod);\n    }\n    startPlacingRods() {\n        const targetRodCount = 1000; // Example target rod count\n        const minDelay = 10; // Minimum delay in milliseconds\n        const maxDelay = 1000; // Maximum delay in milliseconds\n        const placeRodWithVariableTiming = () => {\n            this.placeRod();\n            let progress = this.rods.length / targetRodCount;\n            // Adjust progress to accelerate and then decelerate rod placement\n            if (progress > 1)\n                progress = 1; // Cap progress at 1 to avoid negative delays\n            // Use a parabolic function to model acceleration and deceleration\n            const delay = maxDelay - ((maxDelay - minDelay) * 4 * progress * (1 - progress));\n            setTimeout(placeRodWithVariableTiming, delay);\n        };\n        placeRodWithVariableTiming();\n    }\n}\nnew SphereWithRods();\n\n\n//# sourceURL=webpack://flow/./src/main.ts?");

/***/ }),

/***/ "./node_modules/three/build/three.cjs":
/*!********************************************!*\
  !*** ./node_modules/three/build/three.cjs ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;