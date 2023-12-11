import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import * as THREE from 'three'
export function loadSTLModel(
  scene,
  stlPath,
  options = { receiveShadow: true, castShadow: true },
) {
  const { receiveShadow, castShadow } = options

  return new Promise((resolve, reject) => {
    const loader = new STLLoader()

    loader.load(
      stlPath,
      geometry => {
        const material = new THREE.MeshStandardMaterial({
          // color: 0xaaaaaa,
          roughness: 0.5,
          metalness: 0.2,
        })

        const mesh = new THREE.Mesh(geometry, material)

        mesh.name = 'samoyed-3d'
        mesh.scale.set(1, 1, 1)
        mesh.position.set(0, -100, -100) // Ajuste a posição conforme necessário
        mesh.rotation.set(0, 0.8, 0) // Ajuste a rotação conforme necessário
        mesh.receiveShadow = receiveShadow
        mesh.castShadow = castShadow

        scene.add(mesh)

        mesh.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })

        resolve(mesh)
      },
      undefined,
      function (error) {
        reject(error)
      },
    )
  })
}
