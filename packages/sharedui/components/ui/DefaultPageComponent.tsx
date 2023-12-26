import { PropsWithChildren, useState } from "react"
import { XCircleIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"

import { Modal } from "./Modal"
import { cn } from "../../lib/utils"


interface DefaultPageComponentProps {
  className?: string
  showBackButton?: boolean
}

export const DefaultPageComponent = (
  props: PropsWithChildren<DefaultPageComponentProps>
) => {
  const navigate = useNavigate()
  const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false)

  function activateGoBackConfirmDialog() {
    setShowConfirmDialog(true)
  }

  function navigateBack() {
    setShowConfirmDialog(false)
    navigate(-1)
  }

  return (
    <>
      <Modal
        title={"Zurück?"}
        show={showConfirmDialog}
        showCloseButton={false}
        showCancelButton={true}
        onConfirm={navigateBack}
        onCancel={() => setShowConfirmDialog(false)}
      >
        <div className={"text-2xl"}>Aktuelle Anzeige beenden?</div>
      </Modal>

      <div
        className={cn(
          "aspect[9/16] relative flex h-screen w-screen flex-col items-center justify-start overflow-hidden py-4 text-white",
          props.className
        )}
      >
        {props.showBackButton && (
          <div className={"absolute right-4 top-4 z-50"}>
            <XCircleIcon
              onClick={activateGoBackConfirmDialog}
              className="h-24 w-24"
            />
          </div>
        )}
        {props.showBackButton && (
          <div className={"absolute bottom-4 right-4 z-50"}>
            <XCircleIcon
              onClick={activateGoBackConfirmDialog}
              className="h-24 w-24"
            />
          </div>
        )}

        {props.children}
      </div>
    </>
  )
}
