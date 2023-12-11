import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../libs/model'
import { DogSpinner, DogContainer } from './voxel-dog-loader'
// import { loadSTLModel } from '../libs/modelSTL'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()

  // const urlDogGLB = '/samoyed-3d.glb'
  const urlDogGLB = '/Everything_is_Fine_Dog.glb'

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer
      const scene = new THREE.Scene()

      const target = new THREE.Vector3(-0.5, 1.2, 0)
      const initialCameraPosition = new THREE.Vector3(
        50 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI),
      )

      // 640 -> 240
      // 8 -> 6
      const scale = scH * 0.0000000000005 + 0.6
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000,
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new THREE.AmbientLight(0xffffff, 1)
      ambientLight.castShadow = true
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 5)
      directionalLight.position.set(3, 18, 3)
      directionalLight.castShadow = true
      directionalLight.shadow.mapSize.width = 1024
      directionalLight.shadow.mapSize.height = 1024
      directionalLight.shadow.camera.near = 1.5
      directionalLight.shadow.camera.far = 100
      scene.add(directionalLight)
      // const shadowHelper = new THREE.CameraHelper(
      //   directionalLight.shadow.camera,
      // )
      // scene.add(shadowHelper)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      // Adiciona um plano como representação do chão
      // const groundGeometry = new THREE.PlaneGeometry(200, 200)
      // const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.5 })
      // const ground = new THREE.Mesh(groundGeometry, groundMaterial)
      // ground.rotation.x = -Math.PI / 3
      // ground.position.y = -5 // Posição ajustada para que o chão fique abaixo do modelo
      // ground.receiveShadow = true // Habilita o chão para receber sombras
      // scene.add(ground)

      loadGLTFModel(scene, urlDogGLB, {
        receiveShadow: true,
        castShadow: true,
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  )
}

export default VoxelDog