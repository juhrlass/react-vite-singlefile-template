import { PropsWithChildren } from "react"

import { cn } from "../../lib/utils"

interface MenuGridProps {
  title?: string
  className?: string
}

export const MenuGrid = (props: PropsWithChildren<MenuGridProps>) => {
  return (
    <>
      <div className={cn("grid grid-cols-2 gap-4 w-full", props.className)}>
        {props.children}
      </div>
    </>
  )
}
