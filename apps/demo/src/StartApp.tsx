
import { createHashRouter, RouterProvider } from "react-router-dom"
import { StartStartPage } from "@/pages/StartStartPage.tsx"

const router = createHashRouter([
  {
    path: "/",
    element: <StartStartPage />,
  },
])
export const StartApp = () => {
  return <RouterProvider router={router} />
}
