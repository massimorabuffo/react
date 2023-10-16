import { LanguageContext } from "./LanguageContext";

export function AlertClock() {
    const time = new Date().toLocaleTimeString();
    
    return <>
                <LanguageContext.Provider value="it">
                    <div>{time}</div>
                </LanguageContext.Provider>
            </>
}