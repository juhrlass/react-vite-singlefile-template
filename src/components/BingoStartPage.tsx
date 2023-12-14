import { useState } from "react"
import { Link } from "react-router-dom"

import { Card } from "@/components/ui/Card.tsx"
import { DefaultPageComponent } from "@/components/ui/DefaultPageComponent.tsx"
import { Headline } from "@/components/ui/Headline.tsx"
import { RadioButton } from "@/components/ui/RadioButton.tsx"

export const BingoStartPage = () => {
  const [showLetters, setShowLetters] = useState("true")
  const [totalNumbers, setTotalNumbers] = useState("75")

  const handleTotalNumbersChange = (totalNumbers: string) => {
    setTotalNumbers(totalNumbers)
  }

  const handleShowLettersChange = (showLetters: string) => {
    setShowLetters(showLetters)
  }

  return (
    <DefaultPageComponent className={"bg-black"}>
      <Headline title={"BINGO"} />
      <Card title={"Anzahl der Zahlen"}>
        <RadioButton
          label="25"
          value={totalNumbers === "25"}
          onChange={() => handleTotalNumbersChange("25")}
        />
        <RadioButton
          label="50"
          value={totalNumbers === "50"}
          onChange={() => handleTotalNumbersChange("50")}
        />

        <RadioButton
          label="75"
          value={totalNumbers === "75"}
          onChange={() => handleTotalNumbersChange("75")}
        />
        <RadioButton
          label="90"
          value={totalNumbers === "90"}
          onChange={() => handleTotalNumbersChange("90")}
        />
      </Card>

      <Card title={"Zeige Buchstaben"}>
        <RadioButton
          label="B-I-N-G-O"
          value={showLetters === "true"}
          onChange={() => handleShowLettersChange("true")}
        />
        <RadioButton
          label="Nein"
          value={showLetters === "false"}
          onChange={() => handleShowLettersChange("false")}
        />
      </Card>

      <Link to={`/bingoGamePage/${totalNumbers}/${showLetters}`}>
        <button className="text-5xl py-8 px-16 text-black bg-white rounded-3xl">
          Spiel starten
        </button>
      </Link>
    </DefaultPageComponent>
  )
}
