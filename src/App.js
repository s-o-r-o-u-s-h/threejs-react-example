import {Suspense, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {Model} from "./Scene";
import {OrbitControls} from "@react-three/drei";
import "./App.css";

function App() {
  const [focusPos, setFocusPos] = useState({});
  const onClickElement = (pos) => {
    setFocusPos(pos);
    alert(`You clicked on the following position: ${pos.x}, ${pos.y}, ${pos.z}`);
  };

  return <div id="container">
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls />
        <ambientLight intensity={0.4} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <Model position={[0, -2, 0]} scale={0.6} onClickElem={onClickElement} />
      </Suspense>
    </Canvas>
  </div>
}

export default App;