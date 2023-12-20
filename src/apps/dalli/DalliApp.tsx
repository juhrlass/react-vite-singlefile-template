import { DalliGamePage } from "@/apps/dalli/pages/DalliGamePage.tsx"
import { DalliStartPage } from "@/apps/dalli/pages/DalliStartPage.tsx"
import { createHashRouter, RouterProvider } from "react-router-dom"

const router = createHashRouter([
  {
    path: "/",
    element: <DalliStartPage />,
  },
  {
    path: "/dalliGamePage/:totalNumbers/:showLetters/:autoDrawDelay/:playAudio",
    element: <DalliGamePage />,
  },
])
export const DalliApp = () => {
  return <RouterProvider router={router} />
}
