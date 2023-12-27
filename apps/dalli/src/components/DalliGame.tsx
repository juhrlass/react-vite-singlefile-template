import { useMemo, useState } from "react"
import { useInterval } from "usehooks-ts"
import { CheckboxButton } from "../../../../packages/sharedui/components/ui/CheckboxButton.tsx"
import { Modal } from "../../../../packages/sharedui/components/ui/Modal.tsx"
import { cn } from "../../../../packages/sharedui/lib/utils.ts"

interface DalliGameProps {
  category: string
  totalNumbers: number
  autoDrawDelay: number
  playAudio: boolean
}

export const DalliGame = (props: DalliGameProps) => {
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])
  const [drawnImages, setDrawnImages] = useState<string[]>([])
  const [autoplay, setAutoplay] = useState<boolean>(false)
  const [showEndDialog, setShowEndDialog] = useState(false)
  const [showNewGameConfirmDialog, setShowNewGameConfirmDialog] =
    useState(false)
  const [currentImage, setCurrentImage] = useState<string | undefined>(
    undefined
  )

  // @ts-expect-error
  const dalliData = window.dalli_data ? window.dalli_data
    : [
        {
          category: "Tiere",
          images: [
            {
              name: "Elefant",
              image: "elephant_01.jpg",
            },
            {
              name: "Nashorn",
              image: "rhino_01.jpg",
            },
          ],
        },
        {
          category: "Blumen",
          images: [
            {
              name: "Rose",
              image: "rose_01.jpg",
            },
            {
              name: "Tulpe",
              image: "tulip_01.jpg",
            },
          ],
        },
      ]

  const selectedCategory = useMemo(() => {
    //console.log("Selected category: " + props.category)
    return dalliData.find(
      (element: { category: string }) => element.category === props.category
    )
  }, [props.category,dalliData])

  const allNumbers = useMemo(() => {
    return Array.from({ length: props.totalNumbers }, (_, index) => index)
  }, [props.totalNumbers])

  const remainingNumbers = useMemo(() => {
    return allNumbers.filter((number) => !drawnNumbers.includes(number))
  }, [allNumbers, drawnNumbers])

  const remainingImages = useMemo(() => {
    return selectedCategory.images.filter(
      (imageData: { image: string }) => !drawnImages.includes(imageData.image)
    )
  }, [drawnImages, selectedCategory.images])

  const rollNextImage = () => {
    const remainingCount = remainingImages.length

    if (remainingCount > 0) {
      const randomIndex = Math.floor(Math.random() * remainingCount)

      const newImage = remainingImages[randomIndex]
      setCurrentImage(newImage.image)
      setDrawnImages([...drawnImages, newImage.image])

      if (remainingImages.length === 1) {
        console.log("Game Ended")

        setShowEndDialog(true)
      }
    }
  }
  const uncoverNextTiles = () => {
    const remainingCount = remainingNumbers.length
    if (remainingCount > 0) {
      const remainingNumbersCopy = [...remainingNumbers]
      const numbersToDraw =
        remainingNumbersCopy.length > 4 ? 5 : remainingNumbersCopy.length
      const newDrawnNumbers = []
      for (let i = 0; i < numbersToDraw; i++) {
        const randomIndex = Math.floor(
          Math.random() * remainingNumbersCopy.length
        )
        newDrawnNumbers.push(remainingNumbersCopy[randomIndex])
        remainingNumbersCopy.splice(randomIndex, 1)
      }

      setDrawnNumbers([...drawnNumbers, ...newDrawnNumbers])

      if (remainingNumbersCopy.length === 0) {
        console.log("Game Ended")

        setShowEndDialog(true)
      }
    }
  }

  const resetGame = () => {
    setDrawnNumbers([])
    setDrawnImages([])
    setShowEndDialog(false)
    rollNextImage()
  }

  function newGame() {
    setShowNewGameConfirmDialog(false)
    resetGame()
  }

  const toggleStart = () => {
    resetGame()
    setAutoplay(!autoplay)
  }

  useInterval(
    () => {
      uncoverNextTiles()
    },
    // Delay in milliseconds or null to stop it
    autoplay ? props.autoDrawDelay * 1000 : null
  )

  return (
    <div className="mx-auto flex w-full grow flex-col items-center gap-y-4 p-4">
      <div className="z-10  flex w-full items-center justify-between">
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
              label={"Start"}
              value={autoplay}
              onChange={toggleStart}
            />
          </div>
          <div className={"w-full"}>
            <h1 className={"text-center text-7xl font-bold"}>
              {props.category}
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
      <div className={"z-5 relative h-full  w-full"}>
        <img
          src={currentImage}
          className={"absolute z-10 h-full w-full bg-lime-400 object-cover"}
          alt={""}
        />

        <div className="relative z-20 mb-12 grid h-full w-full flex-1 grid-flow-row grid-cols-10 gap-x-0 gap-y-0 ">
          {allNumbers.map((number, index) => (
            <div
              key={index}
              className={cn(
                drawnNumbers.includes(number)
                  ? "bg-transparent"
                  : "bg-slate-900",
                "select-none"
              )}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
