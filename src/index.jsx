import { createRoot } from "react-dom/client"
import { App } from "./App"


const welcomeElement = <App />


const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

// root.render(welcomeElement)
root.render(welcomeElement)
