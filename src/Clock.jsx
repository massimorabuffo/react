import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
    const lang = useContext(LanguageContext);
    const time = new Date().toLocaleTimeString();
    const itaString = `L'orario corrente è: ${time}`;
    const engString = `Current time is: ${time}`;
    
    return <>
                <div>{lang === 'it' ? itaString : engString}</div>
            </>
}