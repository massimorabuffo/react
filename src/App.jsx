import { useState } from "react"
import { Clock } from "./Clock"
import { LanguageContext } from "./LanguageContext";

export function App() {
    const [language, setLanguage] = useState('it');

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    }

    // Se elimino il Context Provider, il componente non riceverà alcun "value" dal context, e quindi riceverà il valore che,
    // nel file LanguageContext.jsx, abbiamo impostato come di default, in questo caso "it". Quindi verrà mostarta la stringa italiana

    return <>
        
                <select onChange={handleChangeLanguage}>
                    <option value="it">ITA</option>
                    <option value="en">ENG</option>
                </select>
                <Clock />
        
            </>
}