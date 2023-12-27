import { PropsWithChildren } from "react"
import { Link } from "react-router-dom"

interface MenuCardProps {
  title?: string
  image?:string
  to:string
}
export const MenuCard = (props: PropsWithChildren<MenuCardProps>) => {
  return (
    <Link to={props.to}>
    <div className={"flex w-full flex-row aspect-video"}>
      <div
        className={
          "m-6 flex grow flex-col justify-start rounded-3xl bg-slate-900 p-6"
        }
      >
        {props.title && <h2 className={"text-4xl"}>{props.title}</h2>}
        <div className={"flex flex-row"}>{props.children}</div>
      </div>
    </div>
    </Link>
  )
}
