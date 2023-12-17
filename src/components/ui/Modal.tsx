import { XCircleIcon } from "@heroicons/react/24/outline"

interface ModalProps {
  title:string
  show:boolean
  onClose:(() => void)
  onSubmit:(() => void)

}

export const Modal = (props: ModalProps) => {


  return (
    <>

      {props.show ? (
        <>
          <div className={"absolute top-0 bottom-0 left-0 right-0 opacity-75 bg-black z-20"} onClick={()=> {return false}}></div>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">{props.title}</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => props.onClose()}
                  >
                    <span className="text-black opacity-7 w-12 h-12 text-xl block bg-gray-400 py-0 rounded-full">
                      <XCircleIcon className="h-12 w-12" />
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">

                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">

                  <button
                    className="text-white bg-blue-600 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => props.onSubmit()}
                  >
                    Okay!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

