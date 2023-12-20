import { BingoGamePage } from "@/apps/bingo/pages/BingoGamePage.tsx"
import { BingoStartPage } from "@/apps/bingo/pages/BingoStartPage.tsx"
import { createHashRouter, RouterProvider } from "react-router-dom"

const router = createHashRouter([
  {
    path: "/",
    element: <BingoStartPage />,
  },
  {
    path: "/bingoStartPage",
    element: <BingoStartPage />,
  },
  {
    path: "/bingoGamePage/:totalNumbers/:showLetters/:autoDrawDelay/:playAudio",
    element: <BingoGamePage />,
  },
])
export const BingoApp = () => {
  return <RouterProvider router={router} />
}
