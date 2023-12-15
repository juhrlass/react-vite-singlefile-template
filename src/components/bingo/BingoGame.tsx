import { useCallback, useMemo, useState } from "react"
import drumrollAudio from "@/assets/drumroll.mp3"
import handClickIcon from "@/assets/hand_click_icon.svg"
import Particles from "react-particles"
import { Engine, tsParticles } from "tsparticles-engine"
import { loadConfettiPreset } from "tsparticles-preset-confetti"
import { loadStarShape } from "tsparticles-shape-star"

import { cn } from "@/lib/utils.ts"
import { CheckboxButton } from "@/components/ui/CheckboxButton.tsx"

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

interface BingoGameProps {
  totalNumbers: number
  showLetters: boolean
}

export const BingoGame = (props: BingoGameProps) => {
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])
  const [currentNumber, setCurrentNumber] = useState<number | null>(null)
  const [isConfetti, setIsConfetti] = useState(false)
  const [canDraw, setCanDraw] = useState(true)
  const [autoplay, setAutoplay] = useState(false)

  const audio = new Audio(drumrollAudio)
  audio.preload = "auto"

  const allNumbers = Array.from(
    { length: props.totalNumbers },
    (_, index) => index + 1
  )
  const remainingNumbers = allNumbers.filter(
    (number) => !drawnNumbers.includes(number)
  )

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarShape(tsParticles)
    await loadConfettiPreset(engine)
  }, [])

  const particlesConfig: any = {
    fullScreen: {
      enable: true,
      zIndex: 100,
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 0,
      },
      color: {
        value: [
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff",
        ],
      },
      shape: {
        type: ["square", "circle", "star"],
      },
      opacity: {
        value: { min: 0, max: 1 },
        animation: {
          enable: true,
          speed: 0.5,
          startValue: "max",
          destroy: "min",
        },
      },
      size: {
        value: 5,
      },
      links: {
        enable: false,
      },
      life: {
        duration: {
          sync: true,
          value: 20 / 6,
        },
        count: 1,
      },
      move: {
        angle: {
          value: 45,
          offset: 0,
        },
        drift: 0,
        enable: true,
        gravity: {
          enable: true,
          acceleration: 9.81,
        },
        speed: 45,
        decay: 0.1,
        direction: -90,
        random: true,
        straight: false,
        outModes: {
          default: "none",
          bottom: "destroy",
        },
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        direction: "random",
        animation: {
          enable: true,
          speed: 60,
        },
      },
      tilt: {
        direction: "random",
        enable: true,
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 60,
        },
      },
      roll: {
        darken: {
          enable: true,
          value: 25,
        },
        enable: true,
        speed: {
          min: 15,
          max: 25,
        },
      },
      wobble: {
        distance: 60,
        enable: true,
        speed: {
          min: -25,
          max: 25,
        },
      },
    },
    detectRetina: true,
    motion: {
      disable: true,
    },
    emitters: {
      name: "confetti",
      startCount: 50,
      position: {
        x: 50,
        y: 15,
      },
      size: {
        width: 0,
        height: 0,
      },
      rate: {
        delay: 0,
        quantity: 0,
      },
      life: {
        duration: 0.1,
        count: 1,
      },
    },
  }

  const drawNextNumber = () => {
    const remainingCount = remainingNumbers.length
    setIsConfetti(false)
    setCanDraw(false)
    audio.pause()
    audio.currentTime = 0
    if (remainingCount > 0) {
      void audio.play()
      const randomIndex = Math.floor(Math.random() * remainingCount)
      const newNumber = remainingNumbers[randomIndex]

      const durationInMs = 1750

      // timer increments start counter
      // then updates count
      // ends if start reaches end
      const startTimeStamp = new Date().getTime()
      const timer = setInterval(() => {
        setCurrentNumber(getRandomInt(props.totalNumbers))
        const currentTimeStamp = new Date().getTime()

        if (startTimeStamp + durationInMs <= currentTimeStamp) {
          setCurrentNumber(newNumber)
          setDrawnNumbers([...drawnNumbers, newNumber])
          setIsConfetti(true)
          setCanDraw(true)
          clearInterval(timer)
        }
      }, 50)

      // setCurrentNumber(newNumber)
    } else {
      // Hier kannst du eine Meldung anzeigen, dass alle Zahlen gezogen wurden.
      console.log("Alle Zahlen wurden gezogen!")
    }
  }

  const resetGame = () => {
    setDrawnNumbers([])
    setCurrentNumber(null)
  }

  const currentLetter = useMemo(() => {
    return props.showLetters
      ? currentNumber === null
        ? ""
        : "BINGO"[(currentNumber - 1) % 5]
      : ""
  }, [currentNumber])

  return (
    <div className="mx-auto flex w-full grow flex-col items-center gap-y-4 p-4">
      <div className="flex  w-full items-center justify-between">
        <div className="flex w-full flex-row justify-start">
          <div className={"flex w-48 flex-col gap-y-2"}>
            <button
              className="block w-48 rounded-full border border-white bg-gray-600 p-3 text-center  text-2xl    font-bold"
              onClick={resetGame}
            >
              Neues Spiel
            </button>
            <CheckboxButton
              label={"Autoplay"}
              value={autoplay}
              onChange={() => setAutoplay(!autoplay)}
            />
          </div>
          <div className={"w-full"}>
            <h1 className={"text-center text-7xl font-bold"}>
              BINGO {props.totalNumbers}
            </h1>
          </div>
          <div className={"w-48 px-4 py-2"}></div>
        </div>
      </div>

      <div className="mb-2 flex w-full shrink flex-col justify-start ">
        <button
          onClick={drawNextNumber}
          className={
            "relative inline-flex h-96 items-center justify-center rounded-3xl bg-blue-600 pb-6 text-[24em] text-white"
          }
          disabled={!canDraw}
        >
          {currentNumber ? currentLetter + currentNumber : "-"}
          {!autoplay && (
            <img
              className={cn(
                "absolute bottom-3 right-3 h-24 animate-ping text-white",
                { hidden: !canDraw }
              )}
              src={handClickIcon}
              alt={""}
            />
          )}
        </button>

        {isConfetti && (
          <Particles options={particlesConfig} init={particlesInit} />
        )}
      </div>
      {props.showLetters && (
        <div className="mb-2 grid w-full grid-cols-5 gap-x-2 gap-y-2 rounded-3xl bg-slate-800 py-8">
          {"BINGO".split("").map((letter, index) => (
            <div
              key={"l" + index}
              className={
                "relative flex select-none flex-col justify-center rounded-full text-center text-7xl font-bold"
              }
            >
              {letter}
            </div>
          ))}
        </div>
      )}
      <div className="grid w-full flex-1 grid-cols-5 gap-x-4 gap-y-0 ">
        {allNumbers.map((number, index) => (
          <div
            key={index}
            className={cn(
              drawnNumbers.includes(number)
                ? "font-bold text-white "
                : "text-gray-600",
              " border-1 relative  flex select-none flex-col justify-center  border-slate-800 bg-slate-800 p-2 text-center text-5xl ",
              {
                "rounded-t-3xl": index < 5,
                "rounded-b-3xl": index > props.totalNumbers - 1 - 5,
              }
            )}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  )
}
