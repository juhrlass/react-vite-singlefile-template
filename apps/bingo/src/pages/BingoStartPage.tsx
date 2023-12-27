import { useState } from "react"
import { Link } from "react-router-dom"
import { DefaultPageComponent } from "../../../../packages/sharedui/components/ui/DefaultPageComponent.tsx"
import { Headline } from "../../../../packages/sharedui/components/ui/Headline.tsx"
import { Card } from "../../../../packages/sharedui/components/ui/Card.tsx"
import { RadioButton } from "../../../../packages/sharedui/components/ui/RadioButton.tsx"



export const BingoStartPage = () => {
  const [totalNumbers, setTotalNumbers] = useState("75")
  const [showLetters, setShowLetters] = useState("true")
  const [autoDrawDelay, setAutoDrawDelay] = useState("15")
  const [playAudio, setPlayAudio] = useState("true")

  const handleTotalNumbersChange = (totalNumbers: string) => {
    setTotalNumbers(totalNumbers)
  }

  const handleAutoDrawDelayChange = (autoDrawDelay: string) => {
    setAutoDrawDelay(autoDrawDelay)
  }

  const handleShowLettersChange = (showLetters: string) => {
    setShowLetters(showLetters)
  }

  const handlePlayAudioChange = (playAudio: string) => {
    setPlayAudio(playAudio)
  }

  return (
    <DefaultPageComponent className={"bg-black"}>
      <Headline title={"BINGO"} />
      <Card title={"Anzahl der Zahlen"}>
        <RadioButton
          id={"total_numbers_25"}
          label="25"
          value={totalNumbers === "25"}
          onChange={() => handleTotalNumbersChange("25")}
        />
        <RadioButton
          id={"total_numbers_50"}
          label="50"
          value={totalNumbers === "50"}
          onChange={() => handleTotalNumbersChange("50")}
        />

        <RadioButton
          id={"total_numbers_75"}
          label="75"
          value={totalNumbers === "75"}
          onChange={() => handleTotalNumbersChange("75")}
        />
        <RadioButton
          id={"total_numbers_90"}
          label="90"
          value={totalNumbers === "90"}
          onChange={() => handleTotalNumbersChange("90")}
        />
      </Card>

      <Card title={"Verzögerung beim automatischen Ziehen"}>
        <RadioButton
          id={"auto_draw_delay_5"}
          label="5"
          value={autoDrawDelay === "5"}
          onChange={() => handleAutoDrawDelayChange("5")}
        />
        <RadioButton
          id={"auto_draw_delay_10"}
          label="10"
          value={autoDrawDelay === "10"}
          onChange={() => handleAutoDrawDelayChange("10")}
        />

        <RadioButton
          id={"auto_draw_delay_15"}
          label="15"
          value={autoDrawDelay === "15"}
          onChange={() => handleAutoDrawDelayChange("15")}
        />
        <RadioButton
          id={"auto_draw_delay_20"}
          label="20"
          value={autoDrawDelay === "20"}
          onChange={() => handleAutoDrawDelayChange("20")}
        />
        <RadioButton
          id={"auto_draw_delay_30"}
          label="30"
          value={autoDrawDelay === "30"}
          onChange={() => handleAutoDrawDelayChange("30")}
        />
      </Card>

      <Card title={"Zeige Buchstaben"}>
        <RadioButton
          id={"show_letters_yes"}
          label="B-I-N-G-O"
          value={showLetters === "true"}
          onChange={() => handleShowLettersChange("true")}
        />
        <RadioButton
          id={"show_letters_no"}
          label="Nein"
          value={showLetters === "false"}
          onChange={() => handleShowLettersChange("false")}
        />
      </Card>

      <Card title={"Töne abspielen"}>
        <RadioButton
          id={"play_audio_yes"}
          label="Ja"
          value={playAudio === "true"}
          onChange={() => handlePlayAudioChange("true")}
        />
        <RadioButton
          id={"play_audio_no"}
          label="Nein"
          value={playAudio === "false"}
          onChange={() => handlePlayAudioChange("false")}
        />
      </Card>

      <Link
        to={`/bingoGamePage/${totalNumbers}/${showLetters}/${autoDrawDelay}/${playAudio}`}
      >
        <button className="mt-6 rounded-3xl bg-white px-16 py-8 text-5xl text-black">
          Spiel starten
        </button>
      </Link>
    </DefaultPageComponent>
  )
}
