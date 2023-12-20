import { useState } from "react"
import { Link } from "react-router-dom"

import { Card } from "@/components/ui/Card.tsx"
import { DefaultPageComponent } from "@/components/ui/DefaultPageComponent.tsx"
import { Headline } from "@/components/ui/Headline.tsx"
import { RadioButton } from "@/components/ui/RadioButton.tsx"

export const DalliStartPage = () => {
  const [totalNumbers, setTotalNumbers] = useState("160")
  const [autoDrawDelay, setAutoDrawDelay] = useState("1")
  const [playAudio, setPlayAudio] = useState("true")

  const handleTotalNumbersChange = (totalNumbers: string) => {
    setTotalNumbers(totalNumbers)
  }

  const handleAutoDrawDelayChange = (autoDrawDelay: string) => {
    setAutoDrawDelay(autoDrawDelay)
  }

  const handlePlayAudioChange = (playAudio: string) => {
    setPlayAudio(playAudio)
  }

  return (
    <DefaultPageComponent className={"bg-black"}>
      <Headline title={"DALLI"} />
      <Card title={"Anzahl der Zahlen"}>
        <RadioButton
          id={"total_numbers_20"}
          label="20"
          value={totalNumbers === "20"}
          onChange={() => handleTotalNumbersChange("20")}
        />
        <RadioButton
          id={"total_numbers_40"}
          label="40"
          value={totalNumbers === "40"}
          onChange={() => handleTotalNumbersChange("40")}
        />

        <RadioButton
          id={"total_numbers_80"}
          label="80"
          value={totalNumbers === "80"}
          onChange={() => handleTotalNumbersChange("80")}
        />
        <RadioButton
          id={"total_numbers_160"}
          label="160"
          value={totalNumbers === "160"}
          onChange={() => handleTotalNumbersChange("160")}
        />
      </Card>

      <Card title={"Verzögerung beim automatischen Ziehen"}>
        <RadioButton
          id={"auto_draw_delay_1"}
          label="1"
          value={autoDrawDelay === "1"}
          onChange={() => handleAutoDrawDelayChange("1")}
        />
        <RadioButton
          id={"auto_draw_delay_2"}
          label="2"
          value={autoDrawDelay === "2"}
          onChange={() => handleAutoDrawDelayChange("2")}
        />
        <RadioButton
          id={"auto_draw_delay_3"}
          label="3"
          value={autoDrawDelay === "3"}
          onChange={() => handleAutoDrawDelayChange("3")}
        />
        <RadioButton
          id={"auto_draw_delay_4"}
          label="4"
          value={autoDrawDelay === "4"}
          onChange={() => handleAutoDrawDelayChange("4")}
        />
        <RadioButton
          id={"auto_draw_delay_5"}
          label="5"
          value={autoDrawDelay === "5"}
          onChange={() => handleAutoDrawDelayChange("5")}
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
        to={`/dalliGamePage/${totalNumbers}/${autoDrawDelay}/${playAudio}`}
      >
        <button className="mt-6 rounded-3xl bg-white px-16 py-8 text-5xl text-black">
          Spiel starten
        </button>
      </Link>
    </DefaultPageComponent>
  )
}
