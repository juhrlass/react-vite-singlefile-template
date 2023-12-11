import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"

export const StartPage = () => {
  return (
    <div
      className={cn(
        "relative py-4 text-black flex flex-col items-center justify-center h-screen w-screen overflow-hidden"
      )}
    >
      <Link to={"winter"}>
        <button className="text-6xl font-bold p-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-3xl focus:shadow-outline hover:bg-indigo-800">
          Winter
        </button>
      </Link>

      <Link to={"bingoStartPage"}>
        <button className="text-6xl font-bold p-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-3xl focus:shadow-outline hover:bg-indigo-800">
          Bingo
        </button>
      </Link>
    </div>
  )
}
