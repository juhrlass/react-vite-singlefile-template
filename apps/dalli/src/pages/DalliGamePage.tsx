import { DalliGame } from "@/components/DalliGame.tsx"
import { useDalliStore } from "@/store/dalliStore.ts"

import { DefaultPageComponent } from "../../../../packages/sharedui/components/ui/DefaultPageComponent.tsx"

export const DalliGamePage = () => {
  const { category, tiles, autoDrawDelay, playAudio } = useDalliStore()

  return (
    <DefaultPageComponent className={"bg-black"} showBackButton={true}>
      <DalliGame
        category={category}
        totalNumbers={tiles}
        autoDrawDelay={autoDrawDelay}
        playAudio={playAudio}
      />
    </DefaultPageComponent>
  )
}
