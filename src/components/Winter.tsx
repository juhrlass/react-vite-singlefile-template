import { useCallback } from "react"
import sleighBells from "@/assets/sleigh_bells_loop.mp3"
import winterImg from "@/assets/winter_bg_01.jpg"
import Particles from "react-particles"
import { Engine } from "tsparticles-engine"
import { loadSnowPreset } from "tsparticles-preset-snow"

import { cn } from "@/lib/utils"

export const Winter = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSnowPreset(engine)
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
        value: [
          "#defeed",
          "#efefde",
          "#eeeeee",
          "#ddddff",
          "#ededff",
          "#deddee",
        ],
      },
      move: {
        direction: "bottom",
        enable: true,
        random: false,
        straight: false,
      },
      opacity: {
        value: { min: 0.5, max: 0.8 },
      },
      size: {
        value: { min: 1, max: 5 },
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
  }

  return (
    <div
      className={cn(
        " relative py-4  text-white flex flex-col items-center justify-start h-screen w-screen overflow-hidden"
      )}
    >
      <div
        style={{ backgroundImage: "url(" + winterImg + ")" }}
        className={"absolute bg-cover w-full h-full -z-10 "}
      ></div>

      <audio preload="auto" controls={false} autoPlay={true} loop={true}>
        <source type="audio/mpeg" src={sleighBells} />
      </audio>
      <Particles options={particlesConfig} init={particlesInit} />
    </div>
  )
}
