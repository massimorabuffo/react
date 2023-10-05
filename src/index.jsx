import { createRoot } from "react-dom/client"
import { App } from "./App"
import { AlertClock } from "./AlertClock"

const welcomeElement = <App />
const currentTime = <AlertClock />

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

// root.render(welcomeElement)
root.render(currentTime)
