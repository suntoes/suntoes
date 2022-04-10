// credits to craftz.dog and three.js samples

import { Scene } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
  scene: Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'ThreeModel'
        obj.position.y = 11
        obj.position.x = 0
        obj.position.z = 0
        obj.rotateX(0.2)
        obj.rotateY(0.3)
        obj.rotateZ(1.3)
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        obj.scale.set( .125, .125, .125 );
        scene.add(obj)

        obj.traverse(function (child:any) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}