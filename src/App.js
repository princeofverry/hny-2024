import { useState } from "react";
import Countdown from "react-countdown";
import Particles from "react-particles";
import { Typewriter } from "react-simple-typewriter";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Bye 2023🎇"])


  const particleInit = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = newYearDate - nowDate

    return remainingTime
  }

  return (
    <>
      <Particles init={particleInit} options={{ preset: "fireworks" }} />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold z-50 px-4">
          <Typewriter words={newYearMessage} 
          loop={false}
          cursor
          cursorStyle={"_"}
          />
        </span>
        <div className="text-white z-50 font-bold text-2xl">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage(["Selamat", "Tahun", "Baru!!!"])}/>
        </div>
      </div>
    </>
  );
}

export default App;
