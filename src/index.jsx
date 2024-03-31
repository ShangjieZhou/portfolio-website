import "./style.scss";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import {
  DeviceOrientationControls,
  KeyboardControls,
  PointerLockControls,
} from "@react-three/drei";
import Gallery from "./Gallery.jsx";
import Interface from "./components/Interface.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
      ]}
    >
      <div id="main-theme">
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 100,
            position: [0, 2, 6],
          }}
        >
          <Gallery />
        </Canvas>
      </div>
      <Interface />
    </KeyboardControls>
  </Provider>
);
