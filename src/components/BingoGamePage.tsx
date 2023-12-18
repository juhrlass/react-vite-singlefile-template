import { useParams } from "react-router-dom"

import { DefaultPageComponent } from "@/components/ui/DefaultPageComponent.tsx"
import { BingoGame } from "@/components/bingo/BingoGame.tsx"

export const BingoGamePage = () => {
  const { totalNumbers, showLetters, autoDrawDelay, playAudio } = useParams()

  let totalNumbersNumber: number = 75
  if (totalNumbers) {
    totalNumbersNumber = Number.parseInt(totalNumbers)
  }
  let showLettersBoolean: boolean = true
  if (showLetters) {
    showLettersBoolean = /true/i.test(showLetters)
  }
  let autoDrawDelayNumber: number = 20
  if (autoDrawDelay) {
    autoDrawDelayNumber = Number.parseInt(autoDrawDelay)
  }
  let playAudioBoolean: boolean = true
  if (playAudio) {
    playAudioBoolean = /true/i.test(playAudio)
  }

  return (
    <DefaultPageComponent className={"bg-black"} showBackButton={true}>
      <BingoGame
        totalNumbers={totalNumbersNumber}
        showLetters={showLettersBoolean}
        autoDrawDelay={autoDrawDelayNumber}
        playAudio={playAudioBoolean}
      />
    </DefaultPageComponent>
  )
}
