import "./style.scss";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import Gallery from "./Gallery.jsx";
import Interface from "./components/Interface.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { Suspense } from "react";
import Loader from "./components/Loader.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Suspense fallback={<Loader />}>
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
            }}
          >
            <Gallery />
          </Canvas>
        </div>
        <Interface />
      </KeyboardControls>
    </Provider>
  </Suspense>
);
