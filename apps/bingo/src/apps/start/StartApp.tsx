import { StartStartPage } from "@/apps/start/pages/StartStartPage.tsx"
import { createHashRouter, RouterProvider } from "react-router-dom"

const router = createHashRouter([
  {
    path: "/",
    element: <StartStartPage />,
  },
])
export const StartApp = () => {
  return <RouterProvider router={router} />
}
