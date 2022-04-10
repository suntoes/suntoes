// credits to craftz.dog and three.js samples

import { useState, useEffect, useRef, useCallback } from 'react'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { ThinkeristSpinner, ThinkeristContainer } from '../utils/thinkerist-loader'

function easeOutCirc(x:number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Thinkerist  = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer]:any = useState()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_camera, setCamera]:any = useState()
  const [target] = useState(new THREE.Vector3(-0.5, 12, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_controls, setControls]:any = useState()

  const handleWindowResize = useCallback(() => {
    const { current: container }:any = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container }:any = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      //turn on shadows in the renderer
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

      //Create a DirectionalLight and turn on shadows for the light
      const light = new THREE.DirectionalLight( 0xeaeaea, 2 );
      light.position.set( -2, 4, -2 ); //default; light shining from top
      light.castShadow = true; // default false
      scene.add( light );

      //Set up shadow properties for the light
      light.shadow.mapSize.width = 512; // default
      light.shadow.mapSize.height = 512; // default
      light.shadow.camera.near = 0.5; // default
      light.shadow.camera.far = 500; // default

      const ambientLight = new THREE.AmbientLight(0x525252, 1)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target
      setControls(controls)

      loadGLTFModel(scene, 'keyboard.glb', {
        receiveShadow: true,
        castShadow: true
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req:any = null
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
        console.log('unmount')
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <ThinkeristContainer ref={refContainer}>{loading && <ThinkeristSpinner />}</ThinkeristContainer>
  )
}

export default Thinkerist 