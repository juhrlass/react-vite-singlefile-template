import { useDalliStore } from "@/store/dalliStore.ts"
import { DefaultPageComponent } from "@manifold/sharedui"

import { DalliGame } from "@/components/DalliGame.tsx"

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
