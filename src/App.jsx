import { Clock } from "./Clock"
import {LanguageContext} from './LanguageContext'

export function App() {
    return <>
             <LanguageContext.Provider value="it">
                <select>
                    <option value="it">ITA</option>
                    <option value="en">ENG</option>
                </select>
                <Clock />
             </LanguageContext.Provider>
            </>
}