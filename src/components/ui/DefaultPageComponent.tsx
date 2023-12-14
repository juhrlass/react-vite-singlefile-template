import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils.ts"
import { useNavigate } from "react-router-dom"
import { XCircleIcon } from "@heroicons/react/24/outline"

interface DefaultPageComponentProps {
  className?:string
  showBackButton?:boolean
}

export const DefaultPageComponent = (props: PropsWithChildren<DefaultPageComponentProps>) => {


  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "relative py-4 text-white flex flex-col items-center justify-start h-screen w-screen overflow-hidden",props.className
      )}
    >
      {props.showBackButton &&
      <div className={"absolute right-4 top-4"}>
        <XCircleIcon onClick={()=> navigate(-1)} className="h-24 w-24" />
      </div>
      }

      {props.children}
    </div>
  )
}

