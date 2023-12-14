import { ChangeEvent } from "react"

interface CheckboxButtonProps {
  label:string,
  value:boolean,
  onChange:(e: ChangeEvent<HTMLInputElement>) => void
}
export const CheckboxButton = (props:CheckboxButtonProps) => {
  return (
    <div>
      <input
        id={props.label}
        className={"hidden peer appearance-none"}
        type="checkbox"
        checked={props.value}
        onChange={props.onChange}
      />
      <label
        htmlFor={props.label}
        className={
          "appearance-none text-2xl w-48 text-center font-bold border border-white rounded-full  block peer-checked:text-black peer-checked:bg-white  p-3"
        }
      >
        {props.label}
      </label>
    </div>
  )
}
