import { DalliGame } from "@/apps/dalli/components/DalliGame.tsx"
import { useParams } from "react-router-dom"


import { useDalliStore } from "@/apps/dalli/store/dalliStore.ts"
import { DefaultPageComponent } from "../../../../../../packages/sharedui/components/ui/DefaultPageComponent.tsx"

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
