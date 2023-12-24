import { DalliGame } from "@/apps/dalli/components/DalliGame.tsx"
import { useParams } from "react-router-dom"

import { DefaultPageComponent } from "@/components/ui/DefaultPageComponent.tsx"
import { useDalliStore } from "@/apps/dalli/store/dalliStore.ts"

export const DalliGamePage = () => {
  const { playAudio } = useParams()

  const {category,tiles,autoDrawDelay} = useDalliStore()




  let playAudioBoolean = true
  if (playAudio) {
    playAudioBoolean = /true/i.test(playAudio)
  }

  return (
    <DefaultPageComponent className={"bg-black"} showBackButton={true}>
      <DalliGame
        category={category}
        totalNumbers={tiles}
        autoDrawDelay={autoDrawDelay}
        playAudio={playAudioBoolean}
      />
    </DefaultPageComponent>
  )
}
