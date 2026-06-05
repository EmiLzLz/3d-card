# 3D Interactive Card

Tarjeta 3D que reacciona al movimiento del mouse. Primer proyecto standalone de WebGL/Three.js, enfocado en aprender los fundamentos de React Three Fiber.

## ¿Qué hace?

- La tarjeta rota suavemente siguiendo al mouse, pero solo cuando el cursor está encima de ella
- Al salir, vuelve a su posición original con la misma suavidad
- Iluminación tipo foco desde arriba con sombra sobre el plano
- Material físico con efecto de plástico premium (clearcoat)
- Textura personalizada aplicada como imagen

## Stack

- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — React + WebGL
- [@react-three/drei](https://drei.pmnd.rs/) — helpers y abstracciones
- [Three.js](https://threejs.org/) — base matemática y de renderizado
- Vite + React + TypeScript

## Lo que aprendí construyendo esto

- `useFrame` con delta para animaciones frame-rate independent
- Quaternions y `slerp` para interpolar rotaciones sin gimbal lock
- `useRef` para mutar objetos 3D sin provocar re-renders
- Garbage collection — evitar `new THREE.X()` dentro del loop de animación
- Raycasting con `onPointerEnter` / `onPointerLeave` en el mesh
- `meshPhysicalMaterial` y sus propiedades (roughness, clearcoat, ior)
- `useTexture` de Drei para aplicar imágenes como textura
- Iluminación con `pointLight` y sombras en el Canvas

## Estructura

```
src/
├── components/
│   ├── Card.tsx      # mesh principal, lógica de rotación y raycasting
│   └── Plane.tsx     # plano que recibe la sombra
└── App.tsx           # Canvas, cámara, luces
```

## Correr localmente

```bash
npm install
npm run dev
```