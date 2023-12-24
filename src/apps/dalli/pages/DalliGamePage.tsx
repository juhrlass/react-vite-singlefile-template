import { DalliGame } from "@/apps/dalli/components/DalliGame.tsx"
import { useParams } from "react-router-dom"

import { DefaultPageComponent } from "@/components/ui/DefaultPageComponent.tsx"
import { useDalliStore } from "@/apps/dalli/store/dalliStore.ts"

export const DalliGamePage = () => {
  const {autoDrawDelay, playAudio } = useParams()

  const {category,tiles} = useDalliStore()



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
        category={category}
        totalNumbers={tiles}
        autoDrawDelay={autoDrawDelayNumber}
        playAudio={playAudioBoolean}
      />
    </DefaultPageComponent>
  )
}
