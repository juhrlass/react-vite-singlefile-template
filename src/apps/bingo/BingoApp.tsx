import { createHashRouter, RouterProvider } from "react-router-dom"

import { BingoGamePage } from "@/apps/bingo/pages/BingoGamePage.tsx"
import { BingoStartPage } from "@/apps/bingo/pages/BingoStartPage.tsx"

/*import { StartPage } from "@/components/StartPage.tsx"
import { WinterPage } from "@/components/WinterPage.tsx"*/

const router = createHashRouter([
  {
    path: "/",
    //element: <StartPage />,
    element: <BingoStartPage />,
  } /*,
  {
    path: "/winterPage",
    element: <WinterPage />,
  }*/,
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
