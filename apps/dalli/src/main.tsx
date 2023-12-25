import React from "react"
import ReactDOM from "react-dom/client"

import { DalliApp } from "./apps/dalli/DalliApp.tsx"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DalliApp />
  </React.StrictMode>
)
