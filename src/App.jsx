import { useState } from "react"
import { Clock } from "./Clock"
import {LanguageContext} from './LanguageContext'

export function App() {
    const [lang, setLang] = useState('')
    const handleChangeLang = (event) => {
        setLang(event.target.value)
    }

    return <>
             <LanguageContext.Provider value={lang}>
                <select onChange={handleChangeLang}>
                    <option value="it">ITA</option>
                    <option value="en">ENG</option>
                </select>
                <Clock />
             </LanguageContext.Provider>
            </>
}