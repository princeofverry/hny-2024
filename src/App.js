import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

function App() {
  const particleInit = async(engine) => {
    await loadFireworksPreset(engine)
  }


  return (
    <>
      <Particles
        init={particleInit}
        options={{preset: "fireworks"}}
      />
    </>
  );
}

export default App;
