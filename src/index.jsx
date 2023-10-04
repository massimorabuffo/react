import { App } from "./App"
import { createRoot } from "react-dom/client"

const helloWord = <App />

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(helloWord)