import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

function Card() {
  const ref = useRef<THREE.Mesh>(null);
  //garbage collection
  const targetRotation = useRef(new THREE.Euler());
  const quaternion = useRef(new THREE.Quaternion());
  const [insideCard, setInsideCard] = useState(false);

  const props = useTexture({
    map: "card.png",
  });

  useFrame((state, delta) => {
    if (!ref.current) return;

    // map mouse rotation
    const targetX = -state.pointer.y * 0.9;
    const targetY = state.pointer.x * 0.9;
    // without rotation
    const targetZ = 0;

    // update vector with destiny
    if (insideCard) {
      targetRotation.current.set(targetX, targetY, targetZ);
    } else {
      targetRotation.current.set(0, 0, 0);
    }
    //smooth and continous movement
    const lerpFactor = 1 - Math.exp(-6 * delta);

    // apply ref to mesh physic position
    ref.current.quaternion.slerp(
      quaternion.current.setFromEuler(targetRotation.current),
      lerpFactor,
    );
  });

  return (
    <>
      <mesh
        ref={ref}
        scale={1}
        position={[0, 0, 0]}
        castShadow
        onPointerEnter={() => setInsideCard(true)}
        onPointerLeave={() => setInsideCard(false)}
      >
        <boxGeometry args={[3, 2, 0.05]} />
        <meshPhysicalMaterial
          {...props}
          color={"white"}
          roughness={0.12}
          metalness={0.0}
          clearcoat={0.3}
          clearcoatRoughness={0.1}
          ior={1.46}
          thickness={0.2}
        />
      </mesh>
    </>
  );
}

export default Card;
