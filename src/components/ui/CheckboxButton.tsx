import { ChangeEvent } from "react"

interface CheckboxButtonProps {
  label: string
  value: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export const CheckboxButton = (props: CheckboxButtonProps) => {
  return (
    <div>
      <input
        id={props.label}
        className={"peer hidden appearance-none"}
        type="checkbox"
        checked={props.value}
        onChange={props.onChange}
      />
      <label
        htmlFor={props.label}
        className={
          "block w-48 appearance-none rounded-full border border-white p-3 text-center  text-2xl font-bold peer-checked:bg-white  peer-checked:text-black"
        }
      >
        {props.label}
      </label>
    </div>
  )
}
