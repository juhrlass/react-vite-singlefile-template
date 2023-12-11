import { PropsWithChildren } from "react"

export const Card = (props: PropsWithChildren) => {
  return (
    <div className={"flex flex-row w-full"}>
      <div
        className={
          "bg-slate-900 rounded-3xl p-6 m-6 grow flex flex-col justify-start"
        }
      >
        <h2 className={"text-4xl"}>Buchstaben</h2>
        <div className={"flex flex-row"}>{props.children}</div>
      </div>
    </div>
  )
}