/**
 * Main JS entry file
 */
import App from 'App'
import Cube from 'Cube'

console.info('Ready! 🚀')

const app = new App()

// Ajouter mesh à scène
const cube = new Cube(50, 50, 50, 0x00ff00)
app.add(cube.mesh)
