import { useState } from "react"
import GitHubUser from "./GitHubUser";

export function App() {
    const [language, setLanguage] = useState('it');

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    }

    return <>
            <GitHubUser username='massimorabuffo'/>
            </>
}