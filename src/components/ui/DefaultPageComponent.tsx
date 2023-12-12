import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils.ts"
import { useNavigate } from "react-router-dom"
import { XCircleIcon } from "@heroicons/react/24/outline"

interface DefaultPageComponentProps {
  className?:string
}

export const DefaultPageComponent = (props: PropsWithChildren<DefaultPageComponentProps>) => {


  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "relative py-4 text-white flex flex-col items-center justify-start h-screen w-screen overflow-hidden",props.className
      )}
    >
      <div className={"absolute  right-3 top-3"}>
        <XCircleIcon onClick={()=> navigate(-1)} className="h-16 w-16" />
      </div>

      {props.children}
    </div>
  )
}

