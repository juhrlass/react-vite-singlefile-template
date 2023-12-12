import { useParams } from "react-router-dom"

import { DefaultPageComponent } from "@/components/ui/DefaultPageComponent.tsx"
import { BingoGame } from "@/components/bingo/BingoGame.tsx"

export const BingoGamePage = () => {
  const { totalNumbers, showLetters } = useParams()

  let totalNumbersNumber: number = 75
  if (totalNumbers) {
    totalNumbersNumber = Number.parseInt(totalNumbers)
  }
  let showLettersBoolean: boolean = true
  if (showLetters) {
    showLettersBoolean = /true/i.test(showLetters)
  }

  return (
    <DefaultPageComponent className={"bg-black"}>
      <BingoGame
        totalNumbers={totalNumbersNumber}
        showLetters={showLettersBoolean}
      />
    </DefaultPageComponent>
  )
}
