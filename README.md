# 3D Interactive Card

A 3D card that reacts to mouse movement. First standalone WebGL/Three.js project, focused on learning the fundamentals of React Three Fiber.

## What it does

- The card rotates smoothly following the mouse, but only when the cursor is hovering over it
- When the cursor leaves, it returns to its original position with the same smoothness
- Spotlight-style lighting from above casting a shadow on the plane below
- Physical material with a premium plastic finish (clearcoat)
- Custom texture applied as an image

## Stack

- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — React + WebGL
- [@react-three/drei](https://drei.pmnd.rs/) — helpers and abstractions
- [Three.js](https://threejs.org/) — math and rendering foundation
- Vite + React + TypeScript

## What I learned building this

- `useFrame` with delta for frame-rate independent animations
- Quaternions and `slerp` to interpolate rotations without gimbal lock
- `useRef` to mutate 3D objects without triggering re-renders
- Garbage collection — avoiding `new THREE.X()` inside the animation loop
- Raycasting with `onPointerEnter` / `onPointerLeave` on the mesh
- `meshPhysicalMaterial` and its properties (roughness, clearcoat, ior)
- `useTexture` from Drei to apply images as textures
- Lighting with `pointLight` and shadows in the Canvas

## Structure

```
src/
├── components/
│   ├── Card.tsx      # main mesh, rotation logic and raycasting
│   └── Plane.tsx     # plane that receives the shadow
└── App.tsx           # Canvas, camera, lights
```

## Run locally

```bash
npm install
npm run dev
```