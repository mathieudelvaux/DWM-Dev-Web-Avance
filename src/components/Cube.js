import * as THREE from 'three'

/**
  * Cube manager
  *
  * @class Cube
  */
class Cube {
  /**
    * Creates an instance of Cube.
    *
    * @memberOf Cube
    */
  constructor(width, height, depth, color = 0xffffff) {
    // Initialiser le cube
    this._color = color
    this._width = width
    this._height = height
    this._depth = depth

    this.init()
  }

  /**
    * Cube init
    *
    * @returns {undefined}
    *
    * @memberOf Cube
    */
  init() {
    const geometry = new THREE.BoxBufferGeometry(
      this._width,
      this._height,
      this._depth
    )
    const material = new THREE.MeshLambertMaterial({
      color: this._color,
      wireframe: false,
    })
    this._mesh = new THREE.Mesh(geometry, material)
    this._mesh.name = 'cube'
  }

  get mesh() {
    return this._mesh
  }
}

export default Cube
