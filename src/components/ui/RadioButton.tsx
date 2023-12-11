import { ChangeEvent } from "react"

interface RadioButtonProps {
  label:string,
  value:boolean,
  onChange:(e: ChangeEvent<HTMLInputElement>) => void
}
export const RadioButton = (props:RadioButtonProps) => {
  return (
    <div>
      <input
        id={props.label}
        className={"hidden peer"}
        type="radio"
        checked={props.value}
        onChange={props.onChange}
      />
      <label
        htmlFor={props.label}
        className={
          "text-2xl w-40 text-center font-bold border border-white rounded-full  block m-5 peer-checked:text-black peer-checked:bg-white  p-3"
        }
      >
        {props.label}
      </label>
    </div>
  )
}
