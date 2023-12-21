import { DalliGame } from "@/apps/dalli/components/DalliGame.tsx"
import { useParams } from "react-router-dom"

import { DefaultPageComponent } from "@/components/ui/DefaultPageComponent.tsx"

export const DalliGamePage = () => {
  const {category, totalNumbers, autoDrawDelay, playAudio } = useParams()

  let categoryString = "Tiere"
  if (category) {
    categoryString = category
  }
  let totalNumbersNumber = 75
  if (totalNumbers) {
    totalNumbersNumber = Number.parseInt(totalNumbers)
  }

  let autoDrawDelayNumber = 20
  if (autoDrawDelay) {
    autoDrawDelayNumber = Number.parseInt(autoDrawDelay)
  }
  let playAudioBoolean = true
  if (playAudio) {
    playAudioBoolean = /true/i.test(playAudio)
  }

  return (
    <DefaultPageComponent className={"bg-black"} showBackButton={true}>
      <DalliGame
        category={categoryString}
        totalNumbers={totalNumbersNumber}
        autoDrawDelay={autoDrawDelayNumber}
        playAudio={playAudioBoolean}
      />
    </DefaultPageComponent>
  )
}
