import { WinterStartPage } from "@/apps/winter/pages/WinterStartPage.tsx"
import { createHashRouter, RouterProvider } from "react-router-dom"

const router = createHashRouter([
  {
    path: "/",
    element: <WinterStartPage />,
  },
])
export const WinterApp = () => {
  return <RouterProvider router={router} />
}
