import { createHashRouter, RouterProvider } from "react-router-dom"
import { WinterStartPage } from "@/apps/demo/pages/WinterStartPage.tsx"

const router = createHashRouter([
  {
    path: "/",
    element: <WinterStartPage />,
  },
])
export const WinterApp = () => {
  return <RouterProvider router={router} />
}
