import { PropsWithChildren } from "react"

interface CardProps {
  title?: string
}
export const Card = (props: PropsWithChildren<CardProps>) => {
  return (
    <div className={"flex flex-row w-full"}>
      <div
        className={
          "bg-slate-900 rounded-3xl p-6 m-6 grow flex flex-col justify-start"
        }
      >
        {props.title && <h2 className={"text-4xl"}>{props.title}</h2>}
        <div className={"flex flex-row"}>{props.children}</div>
      </div>
    </div>
  )
}
