import {cn} from "@/lib/utils";

import {useCallback, useEffect, useRef} from "react";
import {loadSnowPreset} from "tsparticles-preset-snow";
import Particles from "react-particles";
import {Engine} from "tsparticles-engine";
import winterImg from "./assets/winter_bg_01.jpg";
import sleighBells from "./assets/sleigh_bells_loop.mp3";


export const Winter = () => {

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSnowPreset(engine);
  }, [])

  const particlesConfig = {
    background: {
      color: undefined,
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 200,
      },
      color: {
        value: ["#efdeff", "#edfdee", "#eeeeee", "#ddddff", "#ededff", "#deddee"],
      },
      move: {
        direction: "bottom",
        enable: true,
        random: false,
        straight: false,
      },
      opacity: {
        value: {min: 0.5, max: 0.8},
      },
      size: {
        value: {min: 1, max: 5},
      },
      shape: {
        type: ["circle"],
      },
      wobble: {
        distance: 15,
        enable: true,
        speed: {
          min: -5,
          max: 5,
        },
      },
    },
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext| null>(null);




  useEffect(() => {
    (async () => {
      try {
        if (audioRef.current !== null && audioCtxRef.current === null) {

          audioCtxRef.current = new window.AudioContext();

          const audioSource = audioCtxRef.current.createMediaElementSource(audioRef.current)

          audioSource.connect(audioCtxRef.current.destination)
          await audioRef.current.play()


        }
      } catch (err) {
        console.log('Error occured when fetching books');
      }
    })();
  }, []);

  return (
    <div

      className={cn(" relative py-4  text-white flex flex-col items-center justify-start h-screen w-screen overflow-hidden")}


    >
      <div style={{backgroundImage: "url(" + winterImg + ")"}}
           className={"absolute bg-cover w-full h-full -z-10 "}></div>

      <audio ref={audioRef} preload="none" controls={false} autoPlay={false} loop={true}>
        <source type="audio/mpeg" src={sleighBells}/>
      </audio>
      <Particles options={particlesConfig} init={particlesInit}/>

    </div>
  )
}