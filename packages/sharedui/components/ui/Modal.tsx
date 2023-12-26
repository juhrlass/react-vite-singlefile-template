import { PropsWithChildren } from "react"
import { XCircleIcon } from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils.ts"
import { Button } from "./Button"


const DEFAULT_CONFIRM_TEXT = "Bestätigen"
const DEFAULT_CANCEL_TEXT = "Abbrechen"

interface ModalProps {
  title: string
  confirmText?: string
  cancelText?: string

  show: boolean
  showCancelButton?: boolean
  showCloseButton?: boolean
  onClose?: () => void
  onCancel?: () => void
  onConfirm: () => void
}

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  return (
    <>
      {props.show ? (
        <>
          <div
            className={
              "absolute bottom-0 left-0 right-0 top-0 z-20 bg-black opacity-75"
            }
            onClick={() => {
              return false
            }}
          ></div>
          <div className="fixed inset-0 z-50 flex -translate-y-[11%] items-center justify-center overflow-y-auto overflow-x-hidden text-white shadow-card outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-full max-w-[80%]">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-slate-800 shadow-lg outline-none focus:outline-none">
                <div
                  className={
                    "flex items-start justify-center rounded-t border-b border-solid border-gray-300 p-5"
                  }
                >
                  <h3 className="font=semibold text-3xl">{props.title}</h3>
                  {props.showCloseButton && (
                    <button
                      className="float-right border-0 bg-transparent text-black"
                      onClick={props.onClose}
                    >
                      <span className="block  h-12 w-12 rounded-full py-0  text-2xl text-white">
                        <XCircleIcon className="h-12 w-12" />
                      </span>
                    </button>
                  )}
                </div>
                <div className="relative flex-auto p-6">{props.children}</div>
                <div
                  className={cn(
                    "flex items-center rounded-b p-6",

                    {
                      "justify-between": props.showCancelButton,
                      "justify-center": !props.showCancelButton,
                    }
                  )}
                >
                  {props.showCancelButton && (
                    <Button
                      variant={"secondary"}
                      size={"xl"}
                      onClick={props.onCancel}
                    >
                      {props.cancelText
                        ? props.cancelText
                        : DEFAULT_CANCEL_TEXT}
                    </Button>
                  )}

                  <Button
                    variant={"default"}
                    size={"xl"}
                    onClick={props.onConfirm}
                  >
                    {props.confirmText
                      ? props.confirmText
                      : DEFAULT_CONFIRM_TEXT}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}
