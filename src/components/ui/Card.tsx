import { PropsWithChildren } from "react"

interface CardProps {
  title?: string
}
export const Card = (props: PropsWithChildren<CardProps>) => {
  return (
    <div className={"flex w-full flex-row"}>
      <div
        className={
          "m-6 flex grow flex-col justify-start rounded-3xl bg-slate-900 p-6"
        }
      >
        {props.title && <h2 className={"text-4xl"}>{props.title}</h2>}
        <div className={"flex flex-row"}>{props.children}</div>
      </div>
    </div>
  )
}
