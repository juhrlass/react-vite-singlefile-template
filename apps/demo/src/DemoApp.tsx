
import { createHashRouter, RouterProvider } from "react-router-dom"
import { StartPage } from "@/pages/StartPage.tsx"
import { WinterPage } from "@/pages/WinterPage.tsx"

const router = createHashRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/winter",
    element: <WinterPage />,
  }
])
export const DemoApp = () => {
  return <RouterProvider router={router} />
}
