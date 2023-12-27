import React from "react"
import ReactDOM from "react-dom/client"



import "./index.css"
import { StartApp } from "@/apps/demo/StartApp.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <StartApp />
     </React.StrictMode>
)
