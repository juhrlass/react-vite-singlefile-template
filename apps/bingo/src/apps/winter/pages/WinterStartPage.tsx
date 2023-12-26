import { useEffect, useRef } from "react"
import sleighBells from "@/apps/winter/assets/sleigh_bells_loop.mp3"
import winterImg from "@/apps/winter/assets/winter_bg_01.webp"
import { ISourceOptions } from "@tsparticles/engine"
import { loadSnowPreset } from "@tsparticles/preset-snow"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { DefaultPageComponent } from "../../../../../../packages/sharedui/components/ui/DefaultPageComponent.tsx"


export const WinterStartPage = () => {
  useEffect(() => {
    void initParticlesEngine(async (engine) => {
      await loadSnowPreset(engine)
    }).then(() => console.log("Particle initialized"))
  }, [])

  const particlesConfig: ISourceOptions = {
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
          "#efdeff",
          "#edfdee",
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

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    void (async () => {
      try {
        if (audioRef.current !== null && audioCtxRef.current === null) {
          audioCtxRef.current = new window.AudioContext()

          const audioSource = audioCtxRef.current.createMediaElementSource(
            audioRef.current
          )

          audioSource.connect(audioCtxRef.current.destination)
          await audioRef.current.play()
        }
      } catch (err) {
        console.log("Error occured when fetching books")
      }
    })()
  }, [])

  return (
    <DefaultPageComponent showBackButton={true}>
      <div
        style={{ backgroundImage: "url(" + winterImg + ")" }}
        className={"absolute -z-10 h-full w-full bg-cover "}
      ></div>

      <audio
        ref={audioRef}
        preload="none"
        controls={false}
        autoPlay={false}
        loop={true}
      >
        <source type="audio/mpeg" src={sleighBells} />
      </audio>
      <Particles options={particlesConfig} />
    </DefaultPageComponent>
  )
}
