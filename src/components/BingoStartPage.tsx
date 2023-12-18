import { useState } from "react"
import { Link } from "react-router-dom"

import { Card } from "@/components/ui/Card.tsx"
import { DefaultPageComponent } from "@/components/ui/DefaultPageComponent.tsx"
import { Headline } from "@/components/ui/Headline.tsx"
import { RadioButton } from "@/components/ui/RadioButton.tsx"

export const BingoStartPage = () => {
  const [totalNumbers, setTotalNumbers] = useState("75")
  const [showLetters, setShowLetters] = useState("true")
  const [autoDrawDelay, setAutoDrawDelay] = useState("15")
  const [playAudio, setPlayAudio] = useState("true")


  const handleTotalNumbersChange = (totalNumbers: string) => {
    setTotalNumbers(totalNumbers)
  }

  const handleShowLettersChange = (showLetters: string) => {
    setShowLetters(showLetters)
  }

  const handleAutoDrawDelayChange = (autoDrawDelay: string) => {
    setAutoDrawDelay(autoDrawDelay)
  }

  const handlePlayAudioChange = (playAudio: string) => {
    setPlayAudio(playAudio)
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

      <Card title={"Verzögerung beim automatischen Ziehen"}>
        <RadioButton
          label="5"
          value={autoDrawDelay === "5"}
          onChange={() => handleAutoDrawDelayChange("5")}
        />
        <RadioButton
          label="10"
          value={autoDrawDelay === "10"}
          onChange={() => handleAutoDrawDelayChange("10")}
        />

        <RadioButton
          label="15"
          value={autoDrawDelay === "15"}
          onChange={() => handleAutoDrawDelayChange("15")}
        />
        <RadioButton
          label="20"
          value={autoDrawDelay === "20"}
          onChange={() => handleAutoDrawDelayChange("20")}
        />
        <RadioButton
          label="30"
          value={autoDrawDelay === "30"}
          onChange={() => handleAutoDrawDelayChange("30")}
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



      <Card title={"Töne abspielen"}>
        <RadioButton
          label="Ja"
          value={playAudio === "true"}
          onChange={() => handlePlayAudioChange("true")}
        />
        <RadioButton
          label="Nein"
          value={playAudio === "false"}
          onChange={() => handlePlayAudioChange("false")}
        />
      </Card>

      <Link to={`/bingoGamePage/${totalNumbers}/${showLetters}/${autoDrawDelay}/${playAudio}`}>
        <button className="rounded-3xl bg-white px-16 py-8 text-5xl text-black">
          Spiel starten
        </button>
      </Link>
    </DefaultPageComponent>
  )
}
