import { Link } from "react-router-dom"
import { cn } from "../../../../../../packages/sharedui/lib/utils.ts"



export const StartStartPage = () => {
  return (
    <div
      className={cn(
        "relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden py-4 text-black"
      )}
    >
      <Link to={"winterPage"}>
        <button className="focus:shadow-outline rounded-3xl bg-indigo-700 p-6 text-6xl font-bold text-indigo-100 transition-colors duration-150 hover:bg-indigo-800">
          Winter
        </button>
      </Link>

      <Link to={"bingoStartPage"}>
        <button className="focus:shadow-outline rounded-3xl bg-indigo-700 p-6 text-6xl font-bold text-indigo-100 transition-colors duration-150 hover:bg-indigo-800">
          Bingo
        </button>
      </Link>
    </div>
  )
}
