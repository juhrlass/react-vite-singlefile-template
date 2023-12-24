import React from "react"
import ReactDOM from "react-dom/client"

//import { BingoApp } from "./apps/bingo/BingoApp.tsx"
import { DalliApp } from "./apps/dalli/DalliApp.tsx"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/*<BingoApp />*/}
    <DalliApp />
  </React.StrictMode>
)
