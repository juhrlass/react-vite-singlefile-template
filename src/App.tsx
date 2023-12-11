import { createHashRouter, RouterProvider } from "react-router-dom"

import { StartPage } from "@/components/StartPage.tsx"
import { WinterPage } from "@/components/WinterPage.tsx"
import { BingoStartPage } from "@/components/BingoStartPage.tsx"
import { BingoGamePage } from "@/components/BingoGamePage.tsx"

const router = createHashRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/winterPage",
    element: <WinterPage />,
  },
  {
    path: "/bingoStartPage",
    element: <BingoStartPage />,
  },
  {
    path: "/bingoGamePage/:totalNumbers/:showLetters",
    element: <BingoGamePage/>,
  },
])
export const App = () => {
  return <RouterProvider router={router} />
}
