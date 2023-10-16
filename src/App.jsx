import { useState } from "react"
import { Clock } from "./Clock"
import { LanguageContext } from "./LanguageContext";

export function App() {
    const [language, setLanguage] = useState('it');

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    }

    return <>
            <LanguageContext.Provider value={language}>
                <select onChange={handleChangeLanguage}>
                    <option value="it">ITA</option>
                    <option value="en">ENG</option>
                </select>
                <Clock />
            </LanguageContext.Provider>
            </>
}