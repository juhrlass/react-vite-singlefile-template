import { useMemo, useState } from "react"
import { useInterval } from "usehooks-ts"

import { cn } from "@/lib/utils.ts"
import { CheckboxButton } from "@/components/ui/CheckboxButton.tsx"
import { Modal } from "@/components/ui/Modal.tsx"

interface DalliGameProps {
  totalNumbers: number
  autoDrawDelay: number
  playAudio: boolean
}

export const DalliGame = (props: DalliGameProps) => {
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])
  const [autoplay, setAutoplay] = useState<boolean>(false)
  const [showEndDialog, setShowEndDialog] = useState(false)
  const [showNewGameConfirmDialog, setShowNewGameConfirmDialog] =
    useState(false)
  /*const [currentImage,setCurrentImage]=useState<string>("elephant_01.webp")*/

  const lines: number = Math.floor(props.totalNumbers / 5)

  const allNumbers = useMemo(() => {
    return Array.from(
      { length: props.totalNumbers },
      (_, index) => (index % 5) * lines + 1 + Math.floor(index / 5)
    )
  }, [lines, props.totalNumbers])

  const remainingNumbers = useMemo(() => {
    return allNumbers.filter((number) => !drawnNumbers.includes(number))
  }, [allNumbers, drawnNumbers])

  const drawNextNumber = () => {
    const remainingCount = remainingNumbers.length

    if (remainingCount > 0) {
      const randomIndex = Math.floor(Math.random() * remainingCount)
      const newNumber = remainingNumbers[randomIndex]

      setDrawnNumbers([...drawnNumbers, newNumber])

      if (remainingNumbers.length === 1) {
        console.log("Game Ended")

        setShowEndDialog(true)
      }
    }
  }

  const resetGame = () => {
    setDrawnNumbers([])

    setShowEndDialog(false)
  }

  function newGame() {
    setShowNewGameConfirmDialog(false)
    resetGame()
  }

  const toggleAutoplay = () => {
    setAutoplay(!autoplay)
  }

  /*  const toggleEndDialog = () => {
    setShowEndDialog(!showEndDialog)
  }*/
  useInterval(
    () => {
      drawNextNumber()
    },
    // Delay in milliseconds or null to stop it
    autoplay ? props.autoDrawDelay * 1000 : null
  )

  return (
    <div className="mx-auto flex w-full grow flex-col items-center gap-y-4 p-4">
      <div className="flex  w-full items-center justify-between z-10">
        <div className="flex w-full flex-row justify-start">
          <div className={"flex w-48 flex-col gap-y-2"}>
            <button
              className="block w-48 rounded-full border border-white bg-gray-600 p-3 text-center  text-2xl    font-bold"
              onClick={() => setShowNewGameConfirmDialog(true)}
            >
              Neues Spiel
            </button>
            <CheckboxButton
              activeClassName={"peer-checked:animate-pulse"}
              label={"Autoplay"}
              value={autoplay}
              onChange={toggleAutoplay}
            />
            {/*
            <button
              className="block w-48 rounded-full border border-white bg-gray-600 p-3 text-center  text-2xl    font-bold"
              onClick={toggleEndDialog}
            >
              Dialog
            </button>*/}
          </div>
          <div className={"w-full"}>
            <h1 className={"text-center text-7xl font-bold"}>
              DALLI KLICK
            </h1>
          </div>
          <div className={"w-48 px-4 py-2"}></div>
        </div>
      </div>

      <Modal
        title={"Spiel beendet"}
        show={showEndDialog}
        showCloseButton={false}
        showCancelButton={false}
        onConfirm={resetGame}
      >
        <div className={"text-2xl"}>Das Spiel ist beendet!</div>
      </Modal>

      <Modal
        title={"Neues Spiel?"}
        show={showNewGameConfirmDialog}
        showCloseButton={false}
        showCancelButton={true}
        onConfirm={newGame}
        onCancel={() => setShowNewGameConfirmDialog(false)}
      >
        <div className={"text-2xl"}>
          Wollen Sie wirklich ein neues Spiel starten?
        </div>
      </Modal>
      <div className={"relative w-full h-full  z-5"}>
        <img src={"elephant_01.jpg"} className={"absolute w-full h-full object-cover bg-lime-400 z-10"} alt={""} />

      <div className="relative mb-12 grid w-full h-full flex-1 grid-flow-row grid-cols-10 gap-x-0 gap-y-0 z-20 ">
        {allNumbers.map((number, index) => (
          <div
            key={index}
            className={cn(
              drawnNumbers.includes(number)
                ? "bg-transparent"
                : "bg-slate-900",
              "select-none"
            )}
          >

          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
