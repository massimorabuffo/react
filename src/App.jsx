import { useState } from "react"
import GitHubUsers from "./GitHubUsers";

export function App() {
    const [language, setLanguage] = useState('it');

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    }

    return <>
            <GitHubUsers />
            </>
}