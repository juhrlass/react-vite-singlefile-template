import { DalliGamePage } from "@/pages/DalliGamePage.tsx"
import { DalliStartPage } from "@/pages/DalliStartPage.tsx"
import { createHashRouter, RouterProvider } from "react-router-dom"

const router = createHashRouter([
  {
    path: "/",
    element: <DalliStartPage />,
  },
  {
    path: "/dalliGamePage",
    element: <DalliGamePage />,
  },
])
export const DalliApp = () => {
  return <RouterProvider router={router} />
}
