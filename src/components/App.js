import * as THREE from 'three'
const OrbitControls = require('three-orbit-controls')(THREE)

/**
  * App manager
  *
  * @class App
  */
class App {
  /**
    * Creates an instance of App.
    *
    * @memberOf App
    */
  constructor() {
    // Initialiser une scène
    this.initScene()
  }

  /**
    * Scene init
    *
    * @returns {undefined}
    *
    * @memberOf App
    */
  initScene() {
    console.info('initScene')
    // Create scene
    this._width = window.innerWidth
    this._height = window.innerHeight
    this._scene = new THREE.Scene()
    window.scene = this._scene
    window.THREE = THREE

    // Init lightColor
    this.initLight()

    // Init camera
    this.initCamera()

    // Init renderer
    this.initRenderer()

    // Init controls
    this.initControls()

    // Render !!!
    this.render()
  }

  initLight() {
    const lightColor = 0xffffff
    const light = new THREE.AmbientLight(lightColor, 1)

    this._scene.add(light)
  }

  initCamera() {
    const fieldOfView = 60
    const aspectRatio = this._width / this._height
    const nearPlane = 1
    const farPlane = 2000

    this._camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    )
    this._camera.position.x = 200
    this._camera.position.y = 300
    this._camera.position.z = 500

    const cameraLookX = 0
    const cameraLookY = 0
    const cameraLookZ = 0

    this._camera.lookAt(new THREE.Vector3(
      cameraLookX,
      cameraLookY,
      cameraLookZ
    ))
  }

  initRenderer() {
    this._renderer = new THREE.WebGLRenderer()
    this._renderer.setSize(this._width, this._height)
    document.body.appendChild(this._renderer.domElement)
  }

  initControls() {
    this._controls = new OrbitControls(this._camera, this._renderer.domElement)
  }

  render() {
    requestAnimationFrame(() => {
      this.render()
    });
    this._renderer.render(this._scene, this._camera)
  }

  add(mesh) {
    this._scene.add(mesh)
  }
}

export default App
