import { ChangeEvent } from "react"

interface RadioButtonProps {
  id: string
  label: string
  value: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export const RadioButton = (props: RadioButtonProps) => {
  return (
    <div>
      <input
        id={props.id}
        className={"peer hidden"}
        type="radio"
        checked={props.value}
        onChange={props.onChange}
      />
      <label
        htmlFor={props.id}
        className={
          "m-5 block w-40 rounded-full border border-white p-3  text-center text-2xl font-bold peer-checked:bg-white  peer-checked:text-black"
        }
      >
        {props.label}
      </label>
    </div>
  )
}
