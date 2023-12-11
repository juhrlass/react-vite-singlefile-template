import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils.ts"

export const DefaultPageComponent = (props: PropsWithChildren) => {
  return (
    <div
      className={cn(
        "relative py-4 bg-black text-white flex flex-col items-center justify-start h-screen w-screen overflow-hidden"
      )}
    >
      {props.children}
    </div>
  )
}