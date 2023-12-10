import { createHashRouter, RouterProvider } from "react-router-dom"

import { Start } from "@/components/Start.tsx"
import { Winter } from "@/components/Winter.tsx"

const router = createHashRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/winter",
    element: <Winter />,
  },
])
export const App = () => {
  return <RouterProvider router={router} />
}
