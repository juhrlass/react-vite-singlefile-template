import { PropsWithChildren } from "react"
import { XCircleIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"

import { cn } from "@/lib/utils.ts"

interface DefaultPageComponentProps {
  className?: string
  showBackButton?: boolean
}

export const DefaultPageComponent = (
  props: PropsWithChildren<DefaultPageComponentProps>
) => {
  const navigate = useNavigate()

  return (
    <div
      className={cn(
        "relative flex h-screen w-screen flex-col items-center justify-start overflow-hidden py-4 text-white aspect[9/16]",
        props.className
      )}
    >
      {props.showBackButton && (
        <div className={"absolute right-4 top-4 z-10"}>
          <XCircleIcon onClick={() => navigate(-1)} className="h-24 w-24" />
        </div>
      )}
      {props.showBackButton && (
        <div className={"absolute bottom-4 right-4 z-10"}>
          <XCircleIcon onClick={() => navigate(-1)} className="h-24 w-24" />
        </div>
      )}

      {props.children}
    </div>
  )
}
